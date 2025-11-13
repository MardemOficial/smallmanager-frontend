import { MaterialTypeEnum } from "../../enums/materialtype.enum";

export interface MaterialsInterface {
    id?: string;
    sku?: string;
    name?: string;
    cost?: number;
    typeMaterial?: MaterialTypeEnum;
    description?: string;
    unitaryValue?: number;
}
