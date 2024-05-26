import { Component } from '@angular/core';
import { fade } from '../../../shared/animations/fade';
import { CardComponent } from "../../../shared/components/card/card.component";
import { ListMoviesComponent } from "../list-movies/list-movies.component";

@Component({
    selector: 'app-list',
    standalone: true,
    templateUrl: './list.component.html',
    styleUrl: './list.component.scss',
    animations: [fade],
    imports: [CardComponent, ListMoviesComponent]
})
export class ListComponent { }
