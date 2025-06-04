import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'recetas-guardadas',
    loadComponent: () => import('./pages/recetas-guardadas/recetas-guardadas.page').then( m => m.RecetasGuardadasPage)
  },
  {
    path: 'registrar-receta',
    loadComponent: () => import('./pages/registrar-receta/registrar-receta.page').then( m => m.RegistrarRecetaPage)
  },
];
