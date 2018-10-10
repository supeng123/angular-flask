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
  dataSource = [];
  posts;
  shouldShowProgressBar = false;

  constructor(private route: Router, private activateRoute: ActivatedRoute, public appService: AppService) { }

  ngOnInit() {
    this.page = this.activateRoute.snapshot.routeConfig.path.replace('_', ' ');
    this.shouldShowProgressBar = true;
    this.activateRoute.queryParams.subscribe(
      (params: any) => {
        const keywords = params['keywords'];
        this.selectCurrentPosts(keywords, this.page);
      }
    );
  }

  selectCurrentPosts(keywords, pageName) {
    if (!_.isEmpty(_.find(blogConsts.labels ,item => item.name === pageName))){
      if(_.isEmpty(this.appService.getPosts())) {
        this.appService.findAllPosts()
          .then((mes) => {
            this.posts = mes[0];
            this.appService.setPosts(this.posts);
            this.shouldShowProgressBar = false;
            this.currentPagePosts = !_.isEmpty(this.posts) ? this.showLatestPost(this.getCurrentThemePosts(mes[0], this.page, keywords)) : [];
            this.dataSource = this.currentPagePosts.length > 10 ? this.currentPagePosts.slice(0, 10) : this.currentPagePosts;
          });
      }else {
        this.shouldShowProgressBar = false;
        const posts = this.appService.getPosts();
        this.currentPagePosts = this.showLatestPost(this.getCurrentThemePosts(posts, this.page, keywords));
        this.dataSource = this.currentPagePosts.length > 10 ? this.currentPagePosts.slice(0, 10) : this.currentPagePosts;
      }
    }
  }

  getCurrentThemePosts(serverDatas, pageName, keywords) {
    return !_.isEmpty(keywords) ? serverDatas.filter(post => post.title.includes(keywords)) : serverDatas.filter(post => post.label === pageName);
  }

  shouldShowNoData() {
    return _.isEmpty(this.dataSource) && !this.shouldShowProgressBar;
  }

  onClick(id, label) {
    this.route.navigate(['../blog-detail/'],{relativeTo: this.activateRoute, queryParams: {id, label}});
  }

  showLatestPost(posts) {
    return _.reverse(_.sortBy(posts, post => post.create_time));
  }

  showLessWords(paragraph) {
    return paragraph.substring(0, 200) + '...';
  }

  getCurrentPageData(event) {
    const end = (event.pageIndex + 1) * event.pageSize;
    const start = event.pageIndex * event.pageSize;
    this.dataSource = this.currentPagePosts.slice(start, end);
  }
}
