import { Routes } from '@angular/router';

export const routes: Routes = [{
  path:'',
  loadChildren: () => import('./home/home.routes')
},{
    path: '**',
    loadComponent:() => import('./shared/components/layout/not-found/not-found.component').then(m => m.NotFoundComponent),
  }
];
