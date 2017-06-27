import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  products: Array<Product>;
  updated_product= new Product();
  index= 0;

  constructor(
    private _productService: ProductService,
    private _router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {

    //_ActivatedRoute.snapshot.params --can replace the below URL para
    this._ActivatedRoute.params.subscribe(param => { this._productService.getOneProduct(param.id)})
  } //this._productService.getOneProduct()[id]

  ngOnInit() {
    this._productService.productsObservable.subscribe( (products) => {this.products = products;
    console.log(products);
  })
  }
  update(){
    this._productService.updateProducts(this.products);
    this.updated_product = new Product();
    this._router.navigate(['/products'])

  }
  delete(index){
    this.products.splice(index, 1);
    this._router.navigate(['/products'])
  }

  //unsubscribe
}
