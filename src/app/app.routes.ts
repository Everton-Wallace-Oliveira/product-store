import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { ProductsService } from './services/products.service';

export const routes: Routes = [
  {path:'',
    component: ListComponent
  },
  {
    path:'create-product',
    loadComponent: () => import('./components/create/create.component').then(m => m.CreateComponent),
  },
  {
    path:'edit-product/:id',
    resolve:{
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productsService = inject(ProductsService);

        return productsService.get(route.paramMap.get('id') as string);
      }
    },
    loadComponent: () => import('./components/edit/edit.component').then(m => m.EditComponent),
  }
];
