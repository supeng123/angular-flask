import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router';
import {AppService} from '../../app.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.less']
})
export class BlogdetailComponent implements OnInit {
  article;
  constructor(private route: Router, private router: ActivatedRoute, public appService: AppService) { }

  ngOnInit() {
    this.router.queryParams.subscribe(
      (params: any) => {
        console.log(params);
        const id = Number(params['id']);
        const label = params['label'];
        const posts = this.appService.getPosts();
        this.article = _.find(posts, post => post.id === id && post.label === label);
      }
    )
  }

  onClick() {
    this.route.navigate(['/index']);
  }

}
