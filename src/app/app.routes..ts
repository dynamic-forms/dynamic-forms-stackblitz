import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'bootstrap',
    loadComponent: () => import('./libs/bootstrap/bootstrap.component').then(m => m.BootstrapComponent),
  },
  {
    path: 'material',
    loadComponent: () => import('./libs/material/material.component').then(m => m.MaterialComponent),
  },
];
