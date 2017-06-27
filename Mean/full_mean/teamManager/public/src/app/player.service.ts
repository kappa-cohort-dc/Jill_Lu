import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }
  create(player){
    return this._http
  }
  getAll(){

  }
  delete(id){

  }
}
