import { createAction, props } from "@ngrx/store";
import { Product } from "../interface";

export const addProduct = createAction ('Add Product', props<Product>());

export const removeProduct = createAction ('Remove Product', props<Product>());

export const clearCart = createAction ('Clear Cart');

