import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title= Cookie.get('keyone')   //keyone?
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logOut(){
    Cookie.deleteAll()
    this._router.navigateByUrl('login')
  }
}
