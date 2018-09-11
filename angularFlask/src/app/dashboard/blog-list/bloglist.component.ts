import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'
import blogConsts from '../../common/blog-constants'
import {AppService} from '../../app.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.less']
})
export class BloglistComponent implements OnInit {
  page;
  currentPagePosts = [];
  posts;

  constructor(private route: Router, private activateRoute: ActivatedRoute, public appService: AppService) { }

  ngOnInit() {
    this.page = this.activateRoute.snapshot.routeConfig.path.replace('_', ' ');
    if (!_.isEmpty(_.find(blogConsts.labels ,item => item.name === this.page))){
        if(_.isEmpty(this.appService.getPosts())) {
          this.appService.findAllPosts()
            .then((mes) => {
              this.posts = mes[0];
              this.appService.setPosts(this.posts);
              this.currentPagePosts = !_.isEmpty(this.posts) ? this.posts.filter(post => post.label === this.page) : [];
            });
        }else {
          this.currentPagePosts = this.appService.getPosts().filter(post => post.label === this.page);
        }
    }
  }

  onClick(id, label) {
    this.route.navigate(['../blog-detail/'],{relativeTo: this.activateRoute, queryParams: {id, label}});
  }

  showLessWords(paragraph) {
    return paragraph.substring(0, 500);
  }
}
