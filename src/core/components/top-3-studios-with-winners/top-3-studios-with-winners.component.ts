import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-top-3-studios-with-winners',
  standalone: true,
  imports: [],
  templateUrl: './top-3-studios-with-winners.component.html',
  styleUrl: './top-3-studios-with-winners.component.scss'
})
export class Top3StudiosWithWinnersComponent {
  @Input() public movies: Movies = {} as Movies;
}
