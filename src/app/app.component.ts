import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from '../shared/animations/fade';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { MoviesService } from '../shared/services/movies.service';
import { Movies } from '../shared/services/movies.interface';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent],
    animations: [fade]
})
export class AppComponent {
    public items = [
        {
            name: 'Dashboard',
            link: '/dashboard'
        },
        {
            name: 'List',
            link: '/list'
        }
    ];

    constructor(private moviesService: MoviesService) {
        this.moviesService.getMovies().subscribe((movies: Movies) => {
            console.log(movies);
        });
    }

    public get loading(): boolean {
        return this.moviesService.loading();
    }
}
