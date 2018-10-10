import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendComponent }  from './backend.component';
import { BlogeditorComponent }  from './blogeditor/blog-editor.component';
import { BlogeditorlistComponent }  from './blog-editor-list/blog-editor-list.component';

const backendRoutes: Routes = [
  {
    path: '',
    component: BackendComponent,
    children: [
      {path: 'blog-editor', component: BlogeditorComponent},
      {path: 'blog-list', component: BlogeditorlistComponent}
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(backendRoutes) ],
  exports: [ RouterModule ]
})
export class BackendRoutingModule{ }
