import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopCartComponent } from './products/shop-cart/shop-cart.component';
import { ShopProductsComponent } from './products/shop-products/shop-products.component';

const routes: Routes = [
  { path: 'products', component: ShopProductsComponent },
  { path: 'cart', component: ShopCartComponent },
  { path: '**', component: ShopProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ShopProductsComponent,
  ShopCartComponent
]
