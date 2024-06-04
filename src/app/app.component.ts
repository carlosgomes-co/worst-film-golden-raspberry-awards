import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fade } from '../shared/animations/fade';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { MoviesService } from '../shared/services/movies.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent],
    animations: [fade]
})
export class AppComponent implements OnInit {
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
    public get loading(): boolean {
        return this.moviesService.loading();
    }

    constructor(private moviesService: MoviesService) { }

    public ngOnInit(): void {
        this.moviesService.getDashboardMovies().subscribe();
    }

}
