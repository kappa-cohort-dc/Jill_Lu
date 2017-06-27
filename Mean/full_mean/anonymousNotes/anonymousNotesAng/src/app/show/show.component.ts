import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NotesService } from 'app/notes.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  notes: any= [];
  constructor(private _NotesSevice: NotesService, private _router: Router) {
   }
  note= {};
  ngOnInit() {
  }
  create(){
    this._NotesSevice.create(this.note)
    .then( notes => {this.notes = notes
    this.note={}
  })
    .catch (err => console.log(err))
  }

}
