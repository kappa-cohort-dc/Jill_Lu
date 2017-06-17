import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sup-saiyan',
  templateUrl: './sup-saiyan.component.html',
  styleUrls: ['./sup-saiyan.component.css']
})
export class SupSaiyanComponent implements OnInit {
  @Input() newLevel;
  constructor() { }

  ngOnInit(): void{
    // power: number = newLevel*10;
    // console.log(power);
  }

}
