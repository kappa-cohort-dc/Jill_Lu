import { Component } from '@angular/core';
// import { HttpService } from './http.service';
// import { Product } from './product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title= "PPM - Project Product Management";
  products= Array<Product>();
  product = new Product;

}
