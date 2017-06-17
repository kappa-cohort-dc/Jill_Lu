import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sup-saiyan-two',
  templateUrl: './sup-saiyan-two.component.html',
  styleUrls: ['./sup-saiyan-two.component.css']
})
export class SupSaiyanTwoComponent implements OnInit {
  @Input() newLevel;
  constructor() { }

  ngOnInit() {
  }

}
