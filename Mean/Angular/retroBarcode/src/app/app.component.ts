import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  color = ['DeepPink', 'HotPink', 'Violet', 'Fuchsia', 'LightCoral'];
  a:number = Math.floor(Math.random()*5)+1;
  b:number = Math.floor(Math.random()*5)+1;
  c:number = Math.floor(Math.random()*5)+1;
  d:number = Math.floor(Math.random()*5)+1;
  e:number = Math.floor(Math.random()*5)+1;
}
