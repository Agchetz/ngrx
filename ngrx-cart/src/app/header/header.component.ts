import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { countProducts, totalPrice } from '../shared/store/cart.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  countProducts!: Observable<number>;
  totalPrice!: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.headerData()
  }

  headerData(){
    this.countProducts = this.store.select(countProducts)
    this.totalPrice  = this.store.select(totalPrice)
  }


}
