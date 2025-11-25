import { PaginationInterface } from "../../interfaces/pagination.interface";
import { MaterialsInterface } from "./materials.interface";

export interface MaterialListInterface extends PaginationInterface{
    materialList: MaterialsInterface[]
}
