import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Product, ProductGroup } from "../interface";

export const countProducts = createSelector(
    createFeatureSelector('cartEntries'),
    (state: Product[]) => {
        return state.length
    }
);

export const totalPrice = createSelector ( 
    createFeatureSelector('cartEntries'),
    (state: Product[]) => {
        let totalPrice = 0;
        state.forEach((data) => totalPrice += data.price);
        return totalPrice
    }
);

export const GroupedProducts = createSelector (
    createFeatureSelector('cartEntries'),
    (state: Product[]) => {
        let map: Map<number, ProductGroup> = new Map;

        state.forEach((data) => {
            if(map.get(data.id)){
                let temp = map.get(data.id) as ProductGroup
                temp.count++
            }else{
                map.set(data.id, {product: data, count: 1})
            }
        })

        const sortedMap = new Map([...map.entries()].sort());
        return Array.from(sortedMap.values())
    }
)