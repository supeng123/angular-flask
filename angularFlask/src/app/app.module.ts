import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http'
import {
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatIconModule,
  MatMenuModule,
  MatSnackBarModule,
  MatButtonModule } from '@angular/material';

import {MomentModule} from 'angular2-moment/moment.module';

import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

import { AppRouteModule } from './app.routes';
import { AppService } from './app.service'
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MenubarModule} from 'primeng/menubar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



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
    MomentModule,
    LoginModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    SlideMenuModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatListModule,
    MatSnackBarModule,
    MatSidenavModule,
    AppRouteModule,
    LayoutModule,
    MatButtonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
