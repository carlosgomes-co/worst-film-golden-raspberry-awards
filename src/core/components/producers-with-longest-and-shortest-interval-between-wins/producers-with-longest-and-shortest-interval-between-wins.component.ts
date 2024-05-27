import { Component, Input } from '@angular/core';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
  selector: 'app-producers-with-longest-and-shortest-interval-between-wins',
  standalone: true,
  imports: [],
  templateUrl: './producers-with-longest-and-shortest-interval-between-wins.component.html',
  styleUrl: './producers-with-longest-and-shortest-interval-between-wins.component.scss'
})
export class ProducersWithLongestAndShortestIntervalBetweenWinsComponent {
  @Input() public movies: Movies = {} as Movies;
}
