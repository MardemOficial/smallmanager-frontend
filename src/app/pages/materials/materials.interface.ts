import { UnitOfMeansureTypeEnum } from "../../enums/unit-of-meansure-type.enum";
import { MaterialTypeEnum } from "./materialtype.enum";

export interface MaterialsInterface {
    id?: string,
    sku: string,
    name: string,
    cost: number,
    materialTypeEnum: MaterialTypeEnum,
    unitOfMeasureTypeEnum: UnitOfMeansureTypeEnum,
    unitValue: number,
    description?: string | null,
}
