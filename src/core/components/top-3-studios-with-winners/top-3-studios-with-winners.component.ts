import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Movie, Movies } from '../../../shared/services/movies.interface';

export interface Item {
  name: string;
  winnerCount: number;
}

@Component({
  selector: 'app-top-3-studios-with-winners',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './top-3-studios-with-winners.component.html',
  styleUrl: './top-3-studios-with-winners.component.scss'
})
export class Top3StudiosWithWinnersComponent implements OnChanges {
  @Input() public movies: Movies = {} as Movies;
  displayedColumns = ['name', 'winnerCount'];
  dataSource: Item[] = [];

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['movies']?.currentValue) {
      this.dataSource = this.movies._embedded.movies.reduce((result: Item[], movie: Movie) => {
        const studios = movie.studios;
        const studioFound = result.find((i: Item) => studios.includes(i.name));

        if (studioFound) {
          studioFound.winnerCount++;
          return result;
        }

        studios.forEach((studio: string) => result.push({ name: studio, winnerCount: 1 }));

        return result;
      }, []).sort((a, b) => b.winnerCount - a.winnerCount)
      .slice(0, 3);
    }
  }
}