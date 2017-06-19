import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }
  weatherInfo(city){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+ '&units=imperial&APPID=6c6ab7b525e2b71ca8a91dac04e260e8').map(data=>data.json()).toPromise();
  }
}
