import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.less']
})
export class BackendComponent implements OnInit {
  username:string = '';
  password:string = '';
  loginErrorString = '';

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    if(!this.appService.isAlReadyLogin()) {
      this.router.navigate(['/admin/login'], {});
    }
  }

}
