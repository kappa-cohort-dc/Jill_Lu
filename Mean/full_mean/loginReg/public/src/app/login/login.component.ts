import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';
import { LogregService } from '../logreg.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user ={ email: 'jill@email.com', password: '12345678'}
  constructor(private _logregService: LogregService, private _router: Router) {
  if(Cookie.check('logged_id')){
    this._router.navigateByUrl('home')
  }
  console.log(Cookie.get('logged_id'))
}

  ngOnInit() {
  }
  login(){
    console.log('login component before service call')
    console.log(this.user)
    this._logregService.login(this.user)
    .then((data)=>{
      if (data.login){
      alert('success')
      Cookie.set('logged_id', data.user._id)
    }else{
      alert(data.error)
    }
  })
  }
}
