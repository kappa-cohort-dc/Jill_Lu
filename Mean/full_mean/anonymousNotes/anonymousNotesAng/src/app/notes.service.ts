import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class NotesService {
  constructor(private _http: Http) {}
  notes= {};

  create(note){
    return this._http.post('/notes', note)
    .map( data => data.json())
    .toPromise();
  }
  get(){
    return this._http.get('/notes').map(res => res.json()).toPromise();
  }

  }
