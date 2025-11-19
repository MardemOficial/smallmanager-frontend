import { InventoryInterface } from "./inventory.interface";

export interface InventoryListInterface {
    inventory: InventoryInterface[];
    page: number;
    pageSize: number;
    totalItems: number;
}
