import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  player1: any ={};
  player2: any={};
  username = '';
  users: any=[];
  score1: number= 0;
  score2: number= 0;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  onSubmit1(){
    console.log('component submit 1')
    this._httpService.retrieveGitinfo(this.player1.username)
    .then(user =>{
      this.score1=(user.public_repos+user.followers)*12
      user.score = this.score1;
      user.username=this.player1.username;
      console.log(this.score1)
      this.users.push(user),
      this._httpService.create(user)
      .then(user => {})

    // .then(user => {
    //   this.users.push(user)
    //   console.log(user)
    //   this.score1= (this.users[0].followers +this.users[0].public_repos)*12;
    //   console.log(this.score1)

    })
    .catch (err => console.log(err))
  }

  onSubmit2(){
    console.log('component submit 2')
    this._httpService.retrieveGitinfo(this.player2.username)
    .then(user =>{
      this.score2=(user.public_repos+user.followers)*12
      user.score = this.score1;
      user.username=this.player2.username;
      console.log(this.score2)
      this.users.push(user),
      this._httpService.create(user)
      .then(user => {})
    // .then(user => {
    //   this.users.push(user)
    //   console.log(user)
    //   this.score2= (this.users[1].followers +this.users[1].public_repos)*12;
    //   console.log(this.score2)
    })
    .catch (err => console.log(err))
  }

  gitBattle(){
  }
}
