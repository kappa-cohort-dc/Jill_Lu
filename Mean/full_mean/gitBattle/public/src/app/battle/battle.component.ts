import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// import { Router} from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {
users= [];
  constructor(private _httpService: HttpService) {
    this._httpService.get()
      .then(res => {
        this.users = res
        console.log(this.users)
      })
      .catch(err => console.log(err))
    }
  ngOnInit() {
  }
  reset(){

  }
}
