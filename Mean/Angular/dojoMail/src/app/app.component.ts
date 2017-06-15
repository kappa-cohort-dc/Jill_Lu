import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {
    email: "bill@gates.com",
    importance: true,
    subject: "Hello World",
    content: "This is clearly important...",
    },
    {
    email: "stevejob@email.com",
    importance: true,
    subject: "Brilliant People",
    content: "How to be smart like me",
  },
    {
    email: "smartguy@email.com",
    importance: false,
    subject: "Genuis 101 ",
    content: "blah blah blah",
  },
]}
