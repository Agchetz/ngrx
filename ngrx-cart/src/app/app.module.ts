import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { cartReducer, metaReducersLocal } from './shared/store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({cartEntries: cartReducer}, {metaReducers: [metaReducersLocal]})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
