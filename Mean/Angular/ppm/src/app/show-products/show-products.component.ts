import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private _productService: ProductService,
    private _router: Router,
  ) {
    _productService.productsObservable.subscribe((updatedProducts)=>{this.products= updatedProducts;
    }
  )}
  updateItem(){
    
  }
  delete(i){
    this.products.splice(i, 1)
  }
  ngOnInit() {}
}
