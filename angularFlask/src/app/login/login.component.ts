import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  loginErrorString = '';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  login() {
    if (!this.username || !this.password) return;
    const object = {username:this.username, password: this.password};
    return this.appService.logIn(object);
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
}
