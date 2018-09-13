import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { BlogdetailComponent }  from './blog-detail/blogdetail.component';
import { BloglistComponent }  from './blog-list/bloglist.component';
import { DashboardRoutingModule } from './dashboard.routing';

import {MatPaginatorModule} from '@angular/material/paginator';

import {
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatProgressBarModule,
  MatListModule,
  MatDialogModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatTableModule
} from '@angular/material';
import {FileUploadModule} from "ng2-file-upload";

// import { MessageComponent, MessageDetailComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    MatPaginatorModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatProgressBarModule,
    FileUploadModule,
    MatCheckboxModule,
    MatTableModule],
  exports: [
    ],
  declarations: [
    DashboardComponent,
    BlogdetailComponent,
    BloglistComponent
  ]
  // entryComponents: [DialogComponent, MessageDetailComponent]
})
export class DashboardModule {}
