import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie, Movies } from '../../../shared/services/movies.interface';
import { MatTableModule } from '@angular/material/table';

export interface Item {
  producer: string;
  interval: number;
  previousYear: number;
  followingYear: number;
}

@Component({
  selector: 'app-producers-with-longest-and-shortest-interval-between-wins',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './producers-with-longest-and-shortest-interval-between-wins.component.html',
  styleUrl: './producers-with-longest-and-shortest-interval-between-wins.component.scss'
})
export class ProducersWithLongestAndShortestIntervalBetweenWinsComponent implements OnChanges {
  @Input() public movies: Movies = {} as Movies;
  displayedColumns = ['producer', 'interval', 'previousYear', 'followingYear'];
  maximum: Item[] = [];
  minimum: Item[] = [];

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['movies']?.currentValue) {
      const data = this.movies._embedded.movies.reduce((result: Item[], movie: Movie) => {
        const year = movie.year;
        const producer = movie.producers[0];
        const producerFound = result.find((i: Item) => i.producer === producer) || undefined;

        if (producerFound) {
          if (year < producerFound.previousYear) {
            producerFound.previousYear = year;
            producerFound.interval = producerFound.interval + (producerFound.followingYear - producerFound.previousYear);
            return result;
          }

          if (year > producerFound.followingYear) {
            producerFound.followingYear = year;
            producerFound.interval = producerFound.interval + (producerFound.followingYear - producerFound.previousYear);
            return result;
          }
        }

        result.push({ producer, interval: 0, previousYear: year, followingYear: 0});

        return result;
      }, [])
      .filter((i: Item) => i.interval > 0)
      .sort((a, b) => b.interval - a.interval);

      this.maximum = data.slice(0, 1);
      this.minimum = data.slice().reverse().slice(0, 1);
    }
  }
}