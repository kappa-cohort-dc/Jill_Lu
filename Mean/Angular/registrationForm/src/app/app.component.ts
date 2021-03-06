import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Registration';
  success = null;
  users = Array<User>();
  user = new User;
  constructor() {
    this.success = false;
    this.user = new User();
  }
  onSubmit(){
    this.users.push(this.user);
    this.success = true;
  }
}
