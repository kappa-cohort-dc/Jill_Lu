import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnswersComponent } from './answers/answers.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path: '', pathMatch:'full', redirectTo: 'index'},
  {path: 'index', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'new_question', component: AddQuestionsComponent},
  {path: 'question/:id', component: AnswersComponent},
  {path: 'question/:id/new_answer', component: NewAnswerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
