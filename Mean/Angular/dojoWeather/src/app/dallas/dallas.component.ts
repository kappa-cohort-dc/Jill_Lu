import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  city= 'Chicago';
  weather= [];
  high_temp= 0;
  avg_temp= 0;
  min_temp=0;
  humidity=0;
  status=''

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.weatherInfo(this.city)
    .then(weather =>{this.weather = weather
      console.log(this.weather)

    this.high_temp= weather.main.temp_max
    console.log(this.high_temp)

    this.avg_temp= weather.main.temp
    console.log(this.avg_temp)

    this.min_temp= weather.main.temp_min
    console.log(this.min_temp)

    this.humidity = weather.main.humidity
    console.log(this.humidity)

    this.status = weather.weather[0].description
    console.log(this.status)
    })
    .catch(err =>{console.log(err)})
  }

}
