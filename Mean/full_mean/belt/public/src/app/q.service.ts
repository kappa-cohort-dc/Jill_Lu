import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class QService {

  constructor(private _http: Http) { }
  createUser(user){
    console.log('inside service before register http call')
    return this._http.post('/index', user)
    .map((data) =>{
      console.log('inside service after http call')
      return data.json()
    })
    .toPromise();
  }
  createQuestion(question){
    return this._http.post('/questions', question)
    .map((data)=>{
      return data.json()
    })
    .toPromise();
  }
}
