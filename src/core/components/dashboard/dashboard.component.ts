import { Component } from '@angular/core';
import { fade } from '../../../shared/animations/fade';
import { CardComponent } from "../../../shared/components/card/card.component";
import { ListYearsWithMultipleWinnersComponent } from "../list-years-with-multiple-winners/list-years-with-multiple-winners.component";
import { Top3StudiosWithWinnersComponent } from "../top-3-studios-with-winners/top-3-studios-with-winners.component";
import { ProducersWithLongestAndShortestIntervalBetweenWinsComponent } from "../producers-with-longest-and-shortest-interval-between-wins/producers-with-longest-and-shortest-interval-between-wins.component";
import { ListMovieWinnersByYearComponent } from "../list-movie-winners-by-year/list-movie-winners-by-year.component";
import { MoviesService } from '../../../shared/services/movies.service';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    animations: [fade],
    imports: [CardComponent, ListYearsWithMultipleWinnersComponent, Top3StudiosWithWinnersComponent, ProducersWithLongestAndShortestIntervalBetweenWinsComponent, ListMovieWinnersByYearComponent]
})
export class DashboardComponent {
    constructor(private moviesService: MoviesService) { }

    public get movies(): Movies {
        return this.moviesService.movies;
    }
}
