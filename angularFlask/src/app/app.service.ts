// import {Http, Response, Headers} from "@angular/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable, EventEmitter} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  isLogin = false;

  constructor(private http: HttpClient) {}


  isAlReadyLogin() {
    return this.isLogin;
  }

  setLogInStatu(status) {
    this.isLogin = status
  }

  logIn (object) {
    const body = JSON.stringify(object);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:5000/api/login', body, {headers: headers})
      .map(token => {
        // const messages = [];
        // for(let i=0; i < Object.keys(titles).length; i++) {
        //   messages.push(titles[Object.keys(titles)[i]]);
        // }
        return token;
      })
      .catch(error =>  Observable.throw(error));
  }

  signUp (object) {
    const body = JSON.stringify(object);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://127.0.0.1:5000/api/signup', body, {headers: headers})
      .map(titles => {
        // const messages = [];
        // for(let i=0; i < Object.keys(titles).length; i++) {
        //   messages.push(titles[Object.keys(titles)[i]]);
        // }
        // return messages;
        return titles;
      })
      .catch(error =>  Observable.throw(error));
  }
}

// getMessages() {
//   // return this.http.get<any>('http://127.0.0.1:5000/todos')
//   return this.http.get('http://127.0.0.1:5000/todos', {
//     observe: 'response',
//     responseType: 'json'
//   })
//     .map((titles) => {
//       const messages = [];
//       // const titles = response.json();
//       for(let i = 0; i < Object.keys(titles).length; i++) {
//         messages.push(titles[Object.keys(titles)[i]]);
//       }
//       return messages;
//     })
//     .catch((error) => Observable.throw(error.json()))
// }

  // postMessage() {
    // const body = JSON.stringify({'task': 'this is the new task, please notify it'});
    // const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://127.0.0.1:5000/todos', body, {headers: headers})
    //   .map((response: Response) => {
    //     const messages = [];
    //     const titles = response.json();
    //     for(let i=0; i < Object.keys(titles).length; i++) {
    //       messages.push(titles[Object.keys(titles)[i]]);
    //     }
    //     return messages;
    //   })
    //   .catch((error: Response) => Observable.throw(error.json()))
  // }

  // deleteMessage() {
    // const messageId = 'todo2';
    // return this.http.delete('http://127.0.0.1:5000/todos/'+messageId)
    //   .map((response: Response) => {
    //     const messages = [];
    //     const titles = response.json();
    //     for(let i=0; i < Object.keys(titles).length; i++) {
    //       messages.push(titles[Object.keys(titles)[i]]);
    //     }
    //     return messages;
    //   })
    //   .catch((error: Response) => Observable.throw(error.json()))
  // }

  // updateMessage(message: Message) {
  //        const body = JSON.stringify(message);
  //        const headers = new Headers({'Content-Type': 'application/json'});
  //        const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
  //        return this.http.patch('http://localhost:3000/message/'+ message.messageId + token, body, {headers: headers})
  //            .map((response: Response) => response.json())
  //            .catch((error: Response) => {
  //                this.errorService.handleError(error.json());
  //                return Observable.throw(error.json())
  //            });


  // return this.http.put('http://localhost:3000/message/', body, {
  //    observe: 'body',
  //    params: new HttpParams().set('auth', token)
  //    headers: headers})
//            .map((response: Response) => response.json())
//            .catch((error: Response) => {
//                this.errorService.handleError(error.json());
//                return Observable.throw(error.json())
//            });
  //    }

