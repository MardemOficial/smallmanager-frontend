import { ProductInterface } from "../product/product.interface";

export interface SalesItemInterface {
    id?: string,
    idSales?: string,
    product?: ProductInterface,
    quantity?: number,
    discount_amount?: number,
}
