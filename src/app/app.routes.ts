import { Routes } from '@angular/router';
import { DashboardComponent } from '../core/components/dashboard/dashboard.component';
import { ListComponent } from '../core/components/list/list.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];
