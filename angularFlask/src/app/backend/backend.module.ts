import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
} from '@angular/material';
import { BackendRoutingModule} from './backend.routing';
import { BackendService} from './backend.service';
import { BackendComponent } from './backend.component';
import { BlogeditorComponent }  from './blogeditor/blog-editor.component';
import { BlogeditorlistComponent }  from './blog-editor-list/blog-editor-list.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    ButtonModule,
    DialogModule,
    DropdownModule,
    DataViewModule,
    PanelModule,
    MatButtonModule,
    MatInputModule,
    BackendRoutingModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [BackendService],
  declarations: [BackendComponent, BlogeditorComponent, BlogeditorlistComponent]
})
export class BackendModule {}

