import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-list-movie-winners-by-year',
  standalone: true,
  imports: [],
  templateUrl: './list-movie-winners-by-year.component.html',
  styleUrl: './list-movie-winners-by-year.component.scss'
})
export class ListMovieWinnersByYearComponent {
  @Input() public movies: Movies = {} as Movies;
}
