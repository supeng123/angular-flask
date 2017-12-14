import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { DashboardComponent } from './dashboard.component';

// import { MessageComponent, MessageDetailComponent } from './message/message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
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
  exports: [DashboardComponent],
  declarations: [
    DashboardComponent
  ]
  // entryComponents: [DialogComponent, MessageDetailComponent]
})
export class DashboardModule {}
