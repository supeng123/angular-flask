import { Component, OnInit} from '@angular/core';
import { AppService } from './app.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  constructor(private appService: AppService){}

  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Artificial Intelligence',
        items: [
          {label: 'Machine Learning', icon: 'pi pi-fw pi-pencil', routerLink: ['/index/machine_learning']},
          {label: 'Deep Learning', icon: 'pi pi-fw pi-pencil', routerLink: ['/index/deep_learning']}
        ]
      },
      {
        label: 'FrontEnd Skills',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {label: 'Javascript', icon: 'pi pi-fw pi-trash', routerLink: ['/index/javascript']},
          {label: 'Css', icon: 'pi pi-fw pi-refresh', routerLink: ['/index/css']},
          {label: 'Nodejs', icon: 'pi pi-fw pi-refresh', routerLink: ['/index/nodejs']}
        ]
      }
    ];
  }

  // onClick() {
  //   this.appService.postMessage().subscribe(
  //     messages => {
  //       this.title = messages;
  //     }
  //   );
  //
  //   this.appService.getMessages().subscribe(
  //     messages => {
  //       this.title = messages;
  //     }
  //   )
  // }



  // onDelete() {
  //   this.appService.deleteMessage().subscribe(
  //     messages => {
  //       this.title = messages;
  //     }
  //   )
  // }
}
