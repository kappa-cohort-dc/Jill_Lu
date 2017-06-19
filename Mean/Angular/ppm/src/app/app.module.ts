import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowProductsComponent,
    CreateProductsComponent,
    EditProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
