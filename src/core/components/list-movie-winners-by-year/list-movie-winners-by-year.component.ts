import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-list-movie-winners-by-year',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './list-movie-winners-by-year.component.html',
  styleUrl: './list-movie-winners-by-year.component.scss'
})
export class ListMovieWinnersByYearComponent {
  @Input() public movies: Movies = {} as Movies;

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];
