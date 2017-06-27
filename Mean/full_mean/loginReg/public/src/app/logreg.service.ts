import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class LogregService {

  constructor(private _http: Http) { }
  registerUser(user){
    console.log('inside service before register http call')
    return this._http.post('/users', user)
    .map((data) =>{
      console.log('inside service after http call')
      return data.json()
    })
    .toPromise();
  } //same as .map(data=>data.json())

    login(user){
      console.log('inside service before login http call')
      return this._http.post('login', user)
      .map((data)=>{
        console.log('inside service after http call')
        return data.json()
      })
      .toPromise();
    }

}
