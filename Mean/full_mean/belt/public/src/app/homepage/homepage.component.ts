import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { QService } from '../q.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  name = Cookie.get("name")
  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logOut(){
    Cookie.deleteAll()
    this._router.navigateByUrl('login')
  }
}
