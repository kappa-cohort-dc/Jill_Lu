import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sup-saiyan-four',
  templateUrl: './sup-saiyan-four.component.html',
  styleUrls: ['./sup-saiyan-four.component.css']
})
export class SupSaiyanFourComponent implements OnInit {
  @Input() newLevel;
  constructor() { }

  ngOnInit() {
  }

}
