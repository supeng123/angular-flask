
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }  from './dashboard.component';
import { BlogdetailComponent }  from './blog-detail/blogdetail.component';
import { BloglistComponent }  from './blog-list/bloglist.component';


const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {path: 'blog-detail', component: BlogdetailComponent},
      {path: 'deep_learning', component: BloglistComponent},
      {path: 'machine_learning', component: BloglistComponent},
      {path: 'javascript', component: BloglistComponent},
      {path: 'css', component: BloglistComponent},
      {path: 'nodejs', component: BloglistComponent},
      {path: 'insight', component: BloglistComponent},
      {path: 'search', component: BloglistComponent},
    ]
  },

];

@NgModule({
  imports: [ RouterModule.forChild(dashboardRoutes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule{ }
