import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sup-saiyan-three',
  templateUrl: './sup-saiyan-three.component.html',
  styleUrls: ['./sup-saiyan-three.component.css']
})
export class SupSaiyanThreeComponent implements OnInit {
  @Input() newLevel;
  constructor() { }

  ngOnInit() {
  }

}
