import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
  {path:'',
    component: ListComponent
  },
  {
    path:'create-product',
    loadComponent: () => import('./components/create/create.component').then(m => m.CreateComponent),
  }
];
