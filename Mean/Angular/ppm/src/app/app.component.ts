import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { BehaviorSubject } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "PPM - Project Product Management";
  // products = Array<Product>();
  // product= new Product;

  // constructor(private _productService: ProductService){
    // this._productService.updateProducts(this.products);
    // this._productService.productsObservable.subscribe( (products) =>{ this.products= products;})
  }
  // onSubmit(){
  //   this.products.push(this.product);
  // }

// }
