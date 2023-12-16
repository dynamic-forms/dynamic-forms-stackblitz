import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
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
    loadChildren: () => import('./libs/bootstrap/bootstrap.module').then(m => m.BootstrapModule),
  },
  {
    path: 'material',
    loadChildren: () => import('./libs/material/material.module').then(m => m.MaterialModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
