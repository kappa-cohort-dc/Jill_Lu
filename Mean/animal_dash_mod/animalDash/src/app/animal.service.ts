import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class AnimalService {

  constructor(private _http: Http) {

  }
  get(){                        //change format of response to json
    return this._http.get('/animals').map(res=>res.json()).toPromise();
  }

}


//function(res){return res.json()})=== res => res.json
//assumes return if its only one params
