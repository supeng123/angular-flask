import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from '@angular/router'
import blogConsts from '../../common/blog-constants'
import {AppService} from '../../app.service';
import {PageEvent} from '@angular/material';
import * as _ from 'lodash';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.less']
})
export class BloglistComponent implements OnInit {
  page;
  currentPagePosts = [];
  dataSource = [];
  pageEvent: PageEvent;
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
              this.currentPagePosts = !_.isEmpty(this.posts) ? this.showLatestPost(this.posts.filter(post => post.label === this.page)) : [];
            });
        }else {
          this.currentPagePosts = this.showLatestPost(this.appService.getPosts().filter(post => post.label === this.page));
        }
      this.dataSource = this.currentPagePosts.slice(0, 2);
    }
  }

  onClick(id, label) {
    this.route.navigate(['../blog-detail/'],{relativeTo: this.activateRoute, queryParams: {id, label}});
  }

  showLatestPost(posts) {
    return _.reverse(_.sortBy(posts, post => post.create_time));
  }

  showLessWords(paragraph) {
    return paragraph.substring(0, 200);
  }

  getCurrentPageData(event) {
    const end = (event.pageIndex + 1) * event.pageSize;
    const start = event.pageIndex * event.pageSize;
    this.dataSource = this.currentPagePosts.slice(start, end);
  }
}
