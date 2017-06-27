import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';  //navigate router

@Component({
  selector: 'app-playercreate',
  templateUrl: './playercreate.component.html',
  styleUrls: ['./playercreate.component.css']
})
export class PlayercreateComponent implements OnInit {
//create empty object for ngModel in html
  player= {name:"", position: ""}
  constructor(private _Playerservice: PlayerService, private _router: Router) { }

  ngOnInit() {
  }
  createPlayer(){
    this._Playerservice.create(this.player)
    .then((backend_data)=>{
      this._router.navigateByUrl('/players/list')
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}
