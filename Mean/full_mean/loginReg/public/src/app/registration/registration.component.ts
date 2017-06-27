import { Component, OnInit } from '@angular/core';
import { LogregService} from '../logreg.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
user = {email: 'jill@email.com', first_name: 'Jill', last_name:'Loo', password: '12345678', dob: '06/20/2000'}
confirm_password= '12345678'

  constructor(private _logregService: LogregService, private _router: Router) {
  if(Cookie.check('logged_id')){
    this._router.navigateByUrl('home')
    }
  }
  ngOnInit() {
  }

  register(){
    console.log(this.user)
    if(this.user.password != this.confirm_password){
      alert("password does not match")
    }else{
      console.log('register component 1')
      this._logregService.registerUser(this.user)
      .then((data)=>{
        if(data.error){
          alert (data.messages)
        }else{
          Cookie.set('logged_id', data.user._id)
          this._router.navigateByUrl('home')
        }
      })
    .catch((err)=>{
      console.log('err in register component')
      console.log(err)
      })
    }
  }
}
