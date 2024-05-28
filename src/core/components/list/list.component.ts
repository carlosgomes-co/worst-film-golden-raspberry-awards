import { Component } from '@angular/core';
import { fade } from '../../../shared/animations/fade';
import { CardComponent } from "../../../shared/components/card/card.component";
import { ListMoviesComponent } from "../list-movies/list-movies.component";
import { MoviesService } from '../../../shared/services/movies.service';
import { Movies } from '../../../shared/services/movies.interface';

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
    animations: [fade],
    imports: [CardComponent, ListMoviesComponent]
})
export class ListComponent {
    constructor(private moviesService: MoviesService) { }

    public get movies(): Movies {
        return this.moviesService.movies;
    }
}
