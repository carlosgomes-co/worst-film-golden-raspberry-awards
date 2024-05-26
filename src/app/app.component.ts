import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component';
import { fade } from '../shared/animations/fade';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, SidebarComponent],
    animations: [fade]
})
export class AppComponent { 
    items = [
        {
            name: 'Dashboard',
            link: '/dashboard'
        },
        {
            name: 'List',
            link: '/list'
        }
    ]
}
