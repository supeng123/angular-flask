import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {AppService} from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  loginErrorString = '';

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
  }

  login() {
    if (!this.username || !this.password) return;
    const object = {username:this.username, password: this.password};
    return this.appService.logIn(object)
      .subscribe(message =>  {
        console.log(message);
        this.appService.setLogInStatu(true);
        localStorage.setItem('token', message);
        this.router.navigate(['/index'],{});
       });
  }

  usernameFormControl = new FormControl('', [
    Validators.required,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);
}
