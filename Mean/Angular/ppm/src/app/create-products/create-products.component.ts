import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})

export class CreateProductsComponent implements OnInit {
  products: Array<Product>;
  newProduct= new Product();

  constructor(
    private _productService: ProductService,
    private _router: Router
  ){
    _productService.productsObservable.subscribe( (updatedProducts)=>{
      //updatedProducts comes from service
      this.products= updatedProducts
      //this.products comes from this component
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products);
    // console.log('hello')
    this.newProduct = new Product();
    this._router.navigate(['/products']);
  }
}
