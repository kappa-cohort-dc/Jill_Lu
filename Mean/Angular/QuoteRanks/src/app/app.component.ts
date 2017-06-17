import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = Array<Quote>();
  quote= new Quote;

  onSubmit(){
    this.quotes.push(this.quote);
    console.log(this.quote);
    this.quote= new Quote();
  }
}
