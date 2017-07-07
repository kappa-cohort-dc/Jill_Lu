import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { QService } from './q.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnswersComponent } from './answers/answers.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionsComponent,
    HomepageComponent,
    AnswersComponent,
    NewAnswerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [QService],
  bootstrap: [AppComponent]
})
export class AppModule { }
