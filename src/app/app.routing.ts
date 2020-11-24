import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'admin-layout/inicio',
    pathMatch: 'full',
  }, {
    path: 'admin-layout',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'client-layout',
    component: ClientLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/client-layout/client-layout.module#ClientLayoutModule'
  }]},
  {
    path: 'login-layout',
    component: LoginLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/login-layout/login-layout.module#LoginLayoutModule'
  }]},
  {
    path: '**',
    redirectTo: 'dashboard'
  }
]
