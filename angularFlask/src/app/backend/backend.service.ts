import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class BackendService {
  constructor(private router: Router, private http: HttpClient) {}
  message;
  allPosts;

  addNewPost (object) {
    const body = JSON.stringify(object);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', object.Authorization);
    return this.http.post('http://66.42.63.221:5000/api/addNewPost', body, {headers: headers})
      .subscribe((res) => {
      this.message = res;
      console.log('one post is successfully submitted');
      this.router.navigate(['/backend/blog-list'],{});
    });
  }

  deletePost(obj) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', obj.token);
    const body = JSON.stringify(obj);
    return this.http.post('http://66.42.63.221:5000/api/deletePost',body, {headers})
      .toPromise();
  }

  updatePost(obj) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', obj.token);
    const body = JSON.stringify(obj);
    return this.http.post('http://66.42.63.221:5000/api/updatePost',body, {headers})
      .toPromise();
  }

  getAllPosts() {
    return this.allPosts;
  }

}
