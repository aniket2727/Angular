import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ApiGetComponent } from './api-get/api-get.component';
export const routes: Routes = [
  {
    path: 'user-name',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
     path:'binding',
     component:DataBindingComponent,
  },
  {
    path:'',
    component:ApiGetComponent,
  },
];
