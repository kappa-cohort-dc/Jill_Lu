import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
