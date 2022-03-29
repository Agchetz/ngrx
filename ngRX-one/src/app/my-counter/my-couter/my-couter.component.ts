import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from 'src/app/counter.actions';

@Component({
  selector: 'app-my-couter',
  templateUrl: './my-couter.component.html',
  styleUrls: ['./my-couter.component.css']
})
export class MyCouterComponent {

  count!: Observable<number>

  constructor(private store: Store<{count: number}>) {
    let count:any = store.select('count')
    this.count = count
   }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
 

}
