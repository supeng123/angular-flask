import { Component } from '@angular/core';
import { AppService } from './app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private appService: AppService){}

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
