import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { QService } from '../q.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ={ name: 'Jill'}
    constructor(private _QService: QService, private _router: Router) {
    if(Cookie.check('logged_id')){
      this._router.navigateByUrl('home')
    }
    console.log(Cookie.get('logged_id'))
  }

  ngOnInit() {
  }
  create(){
    console.log('login component before service call')
    console.log(this.user)
    this._QService.createUser(this.user)
    .then((data)=>{
      if (data.error){
      alert(data.messages)
    }else{
      Cookie.set('logged_id', data.user._id)
      this._router.navigateByUrl('home')
    }
  })
  .catch((err)=>{
    console.log('err in login comp')
    console.log(err)
  })
  }
}
