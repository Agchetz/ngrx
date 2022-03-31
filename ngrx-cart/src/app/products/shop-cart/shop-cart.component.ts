import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addProduct, clearCart, removeProduct } from 'src/app/shared/store/cart.action';
import { GroupedProducts } from 'src/app/shared/store/cart.selector';

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  public cartEntries!: Observable<any>

  constructor(private store: Store) { 
    this.cartEntries = this.store.select(GroupedProducts);
  }

  ngOnInit(): void {
  }

  clearEntries () {
    this.store.dispatch(clearCart())
  }

  increment (entry:any) {
    this.store.dispatch(addProduct(entry.product))
  }

  decrement (entry:any) {
    this.store.dispatch(removeProduct(entry.product))
  }
}
