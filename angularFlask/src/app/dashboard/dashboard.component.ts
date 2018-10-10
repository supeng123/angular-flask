import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { AppService } from "../app.service";
import {FileUploader} from "ng2-file-upload";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  public items: MenuItem[];
  targetValue = '';
  imageUrl: string = '';
  token = localStorage.getItem('token');
  keywords = '';
  display = false;

  public uploader: FileUploader = new FileUploader({
    url:'http://66.42.63.221:5000/api/uploadFile',
    method: 'POST',
    authToken: this.token,
    authTokenHeader: this.token,
    headers: [{name: 'x-auth-token', value: this.token},{name: 'Authorization', value: this.token}]
  });

  constructor(private appService: AppService, private router: Router, private activateRoute: ActivatedRoute,) {

  }

  setDisplay() {
    this.display = true;
  }

  selectedFileOnChanged(event:any) {
    this.targetValue = event.target.value;
  }

  searchPosts() {
    if (!this.isKeywordsValid()) return;
    this.router.navigate(['/index/search'],{relativeTo: this.activateRoute, queryParams: {'keywords':this.keywords}});
  }

  isKeywordsValid(){
    return this.keywords.length >= 2;
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
    this.items = [{
      label: 'navigation',
      items: [
          {label: 'machine learning', icon: 'fas fa-graduation-cap', routerLink: ['/index/machine_learning']},
          {label: 'deep learning', icon: 'fab fa-studiovinari', routerLink: ['/index/deep_learning']},
          {label: 'javascript', icon: 'fab fa-js-square', routerLink: ['/index/javascript']},
          {label: 'html&css', icon: 'fab fa-html5', routerLink: ['/index/css']},
          {label: 'nodejs', icon: 'fab fa-node', routerLink: ['/index/nodejs']},
          {label: 'insight', icon: 'fas fa-brain', routerLink: ['/index/insight']}
      ],
    }];
  }
}
