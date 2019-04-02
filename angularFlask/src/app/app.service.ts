import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Router} from "@angular/router";

@Injectable()
export class AppService {
  isLogin = false;
  posts;

  constructor(private router: Router, private http: HttpClient) {
  }

  isAlReadyLogin() {
    return this.isLogin;
  }

  setLogInStatu(status) {
    this.isLogin = status
  }

  logIn(object) {
    const body = JSON.stringify(object);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://202.182.124.185:5000/api/login', body, {headers: headers})
      .subscribe(message => {
        this.setLogInStatu(true);
        localStorage.setItem('token', message['token']);
        localStorage.setItem('user_id', message['user_id']);
        this.router.navigate(['/backend/blog-list'], {});

        const obj = {
          user_id: message['user_id'],
          token: message['token']
        };
        this.findAllPosts()
          .then(mes => this.posts = mes[0]);
      });
  }

  signUp(object) {
    const body = JSON.stringify(object);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://202.182.124.185:5000/api/signup', body, {headers: headers})
      .map(titles => titles,
        error => error);
  }

  findAllPosts() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get('http://202.182.124.185:5000/api/findAllPosts', {headers})
      .toPromise();
  }

  getPosts() {
    return this.posts;
  }

  setPosts(posts) {
    this.posts = posts;
  }
}

