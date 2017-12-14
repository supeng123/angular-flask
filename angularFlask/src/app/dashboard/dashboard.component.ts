import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../app.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) {
    if(!this.appService.isAlReadyLogin()) {
      this.router.navigate(['/login'], {});
    }
  }

  ngOnInit() {
  }

}
