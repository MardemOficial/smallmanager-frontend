import { SalesInterface } from "./sales.interface";

export interface InStoreInterface extends SalesInterface {
    table?: string,
}
