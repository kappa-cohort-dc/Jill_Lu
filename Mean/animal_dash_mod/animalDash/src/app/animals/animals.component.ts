import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: any =[]
  // Array <any>=[{_id:'1', name:'Pandas', cuteness:'100', description:'the cutest evaaaaa'}]
  constructor(private _AnimalService: AnimalService) {
    console.log('just created animal component')
    this._AnimalService.get()  //invoking method from service 
    .then( res => {
      console.log('data received')
      this.animals = res   //sets local var to res received from service
      console.log(res)
    })
    .catch(err => console.log(err))
  }
  ngOnInit() {
  }

}
