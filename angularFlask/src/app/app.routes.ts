import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'login', component: LoginComponent},

  {path: '', component: AppComponent, children: [
    {path: '', component: DashboardComponent},
    {path: 'index', component: DashboardComponent}
  ]
  },

  {path: '**', component: NotfoundComponent},

  {
    path: '',
    redirectTo: 'login',
    pathMatch : 'full'
  }
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
