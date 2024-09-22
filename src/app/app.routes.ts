import { Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  {path:'',
    component: ListComponent
  },
  {
    path:'create-product',
    component:CreateComponent
  }
];
