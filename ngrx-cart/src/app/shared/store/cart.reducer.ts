import { ActionReducer, createReducer, INIT, on, UPDATE } from "@ngrx/store";
import { Product } from "../interface";
import { clearCart, addProduct, removeProduct } from "./cart.action";

export const initialState: Product[] = [];

export const cartReducer = createReducer (
    initialState,
    on(clearCart, data => []),

    on(addProduct, (entries, product) => {
        const entriesClone = JSON.parse(JSON.stringify(entries));
        entriesClone.push(product);
        return entriesClone
    }),

    on(removeProduct, (entries, product) => {
        const entriesClone = JSON.parse(JSON.stringify(entries));
        const found = entriesClone.find((data:any) => data.id == product.id)
        if(found){
            entriesClone.splice(entriesClone.indexOf(found), 1)
        }
        return entriesClone
    })
)

export const metaReducersLocal =  (reducer: ActionReducer<any>): ActionReducer<any> => {
    return (state, action) => {
        console.log(state, action, '***********')
        if(action.type === INIT || action.type === UPDATE){
            const storageValue = localStorage.getItem("state");
            if(storageValue){
                try{
                    return JSON.parse(storageValue);
                }catch{
                    localStorage.removeItem("state")
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState
    }
}