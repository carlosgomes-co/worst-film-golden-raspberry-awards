import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-list-movies',
  standalone: true,
  imports: [],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.scss'
})
export class ListMoviesComponent {
  @Input() public movies: Movies = {} as Movies;
}
