import { Component, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router'

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClick() {
    this.route.navigate(['/index']);
  }

}
