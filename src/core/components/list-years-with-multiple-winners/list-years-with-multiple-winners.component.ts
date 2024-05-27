import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie, Movies } from '../../../shared/services/movies.interface';
import { MatTableModule } from '@angular/material/table';

export interface Item {
  year: number;
  winnerCount: number;
}

@Component({
  selector: 'app-list-years-with-multiple-winners',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './list-years-with-multiple-winners.component.html',
  styleUrl: './list-years-with-multiple-winners.component.scss'
})
export class ListYearsWithMultipleWinnersComponent implements OnChanges {
  @Input() public movies: Movies = {} as Movies;
  displayedColumns = ['year', 'winnerCount'];
  dataSource: Item[] = [];

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['movies']?.currentValue) {
      // List years with multiple winners using two colluns year and winnerCount
      this.dataSource = this.movies._embedded.movies.reduce((result: Item[], movie: Movie) => {
        const year = movie.year;
        const yearFound = result.find((i: Item) => i.year === year);

        if (yearFound) {
          yearFound.winnerCount++;
          return result;
        }

        result.push({ year, winnerCount: 1 });

        return result;
      }, []).sort((a, b) => b.winnerCount - a.winnerCount)
      .slice(0, 3);
    }
  }
}