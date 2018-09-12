import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {
    path: 'index',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'backend',
    loadChildren: 'app/backend/backend.module#BackendModule'
  },
  {path: 'admin/login', component: LoginComponent},
  {
    path: '',
    redirectTo: '/index/insight',
    pathMatch : 'full'
  },
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRouteModule {}
