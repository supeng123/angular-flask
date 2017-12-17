import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AppService } from "../app.service";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  targetValue = '';
  imageUrl: string = '';
  token = localStorage.getItem('token');

  public uploader: FileUploader = new FileUploader({
    url:'http://127.0.0.1:5000/api/uploadFile',
    method: 'POST',
    authToken: this.token,
    authTokenHeader: this.token,
    headers: [{name: 'x-auth-token', value: this.token},{name: 'Authorization', value: this.token}]
  });

  constructor(private appService: AppService, private router: Router) {
    if(!this.appService.isAlReadyLogin()) {
      this.router.navigate(['/login'], {});
    }
  }

  selectedFileOnChanged(event:any) {
    this.targetValue = event.target.value;
  }

  uploadFile() {
    this.uploader.queue[0].onSuccess = (response, status) => {
      if (status == 200) {
        this.imageUrl = JSON.parse(response);
      } else {
        console.log("upload file failed!")
      }
    };
    this.uploader.queue[0].upload();
  }

  ngOnInit() {
  }

}
