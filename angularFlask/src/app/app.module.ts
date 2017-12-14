import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http'
import { MatToolbarModule, MatListModule, MatSidenavModule, MatIconModule, MatMenuModule, MatSnackBarModule } from '@angular/material';

import { AppRouteModule } from './app.routes';
import { AppService } from './app.service'
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    LoginModule,
    DashboardModule,
    AppRouteModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
