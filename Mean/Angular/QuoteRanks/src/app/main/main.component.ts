import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() quotes;

  count = 0;
  voteUp(quote){
    quote.count++;
    console.log(this.count)
  }
  voteDown(quote){
    if(quote.count>0)
    quote.count--;
    console.log(this.count)
  }
  delete(i){
    this.quotes.splice(i, 1)
  }
  constructor() { }

  ngOnInit() {
  }

}
