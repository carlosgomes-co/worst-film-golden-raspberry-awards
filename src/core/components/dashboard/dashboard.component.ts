import { Component } from '@angular/core';
import { fade } from '../../../shared/animations/fade';
import { CardComponent } from "../../../shared/components/card/card.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    animations: [fade],
    imports: [CardComponent]
})
export class DashboardComponent {

}
