import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { CreateProductsComponent } from './create-products/create-products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent},
    { path: 'products', component: ShowProductsComponent},
    { path: 'create', component: CreateProductsComponent},
    { path: 'edit/:id', component: EditProductsComponent},
    // { path: 'delete', redirectTo: 'products'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
