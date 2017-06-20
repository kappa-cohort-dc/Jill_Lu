import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';  //import observable
import { Product } from './product'  //import class

@Injectable()
export class ProductService {
  productsObservable = new BehaviorSubject([]);
  products=[]; //observable to push into this array

  constructor() { }

  updateProducts(products: Array<Product>){
    this.productsObservable.next(products);
  }
  getOneProduct(id){
    return this.products[id]
  }
}


// create method on components that will call upon services
// make bulk method in services
