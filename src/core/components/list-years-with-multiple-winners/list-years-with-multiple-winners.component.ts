import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-list-years-with-multiple-winners',
  standalone: true,
  imports: [],
  templateUrl: './list-years-with-multiple-winners.component.html',
  styleUrl: './list-years-with-multiple-winners.component.scss'
})
export class ListYearsWithMultipleWinnersComponent {
  @Input() public movies: Movies = {} as Movies;
}
