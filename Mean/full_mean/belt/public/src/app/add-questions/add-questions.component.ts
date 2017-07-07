import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies';
import { QService } from '../q.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
questions: any=[];
  constructor(private _router: Router, private _Qservice: QService) { }
  question={};
  ngOnInit() {
  }
  createQ(){
  //   this._Qservice.createQuestion(this.question)
  //   .then( notes => {this.questions = questions
  //   this.question{}
  // })
  // .catch(err => console.log(err))
  }
  // logOut(){
  //   Cookie.deleteAll()
  //   this._router.navigateByUrl('login')
  // }
}
