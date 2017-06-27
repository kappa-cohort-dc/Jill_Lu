import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  // usernames: any ={};

  constructor(private _http: Http) { }
  retrieveGitinfo(username){
    return this._http.get('https://api.github.com/users/'+username).map(data=>data.json()).toPromise();
  }
  get(){
    console.log('service')
    return this._http.get('/rankings')
    .map(res => res.json())
    .toPromise();
  }
  create(player){
    console.log('creating player')
    return this._http.post('/rankings', player)
    .map( data => data.json())
    .toPromise();
  }

}
