import { Component, Input } from '@angular/core';
import { Power } from './power';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  power_levels = Array<Power>();
  power = new Power;
  constructor(){
    this.power= new Power();
  }
  onSubmit(){
    this.power_levels.push(this.power);
    console.log(this.power);
    this.power= new Power;
  }
}
