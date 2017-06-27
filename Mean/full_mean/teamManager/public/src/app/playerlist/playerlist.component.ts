import { Component, OnInit } from '@angular/core';
import { PlayerService } from './player.service';
@Component({
  selector: 'app-playerlist',
  templateUrl: './playerlist.component.html',
  styleUrls: ['./playerlist.component.css']
})
export class PlayerlistComponent implements OnInit {
  users: any;
  constructor(private _playerService: PlayerService) { }

  ngOnInit() {
  }

}
