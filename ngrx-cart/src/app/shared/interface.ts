export interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    image: string
}

export interface ProductGroup {
    product: Product,
    count: number

}