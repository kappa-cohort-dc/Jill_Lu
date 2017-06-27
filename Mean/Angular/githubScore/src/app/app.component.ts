import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GitHub Score';
  username ="";
  githubinfo= [];
  score =0;

  constructor(private _httpService: HttpService){}

  onSubmit(name){
    this.username= name.username;
    this._httpService.retrieveGitinfo(this.username)
    .then(githubinfo => { this.githubinfo = githubinfo
    this.score=githubinfo.followers + githubinfo.public_repos;
    console.log(this.score)
    })
    .catch(err =>{console.log(err)})
    }
  }
