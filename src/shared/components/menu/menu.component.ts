import { Component, Input } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { fade } from '../../animations/fade';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatRipple],
  providers: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [fade]
})
export class MenuComponent {
  @Input() items: any[] = [];

  // read the page from active route
  // and save to property
  activePage: string = '';
  constructor() {
    console.log();
  }
}
