import { FiscalInformationInterface } from "../../interfaces/fiscal-information.interface";
import { CompositionInterface } from "../../interfaces/composition.interface";
import { ProductTypeEnum } from "../../enums/product-type.enum";

export interface ProductInterface {
    id?: string;
    sku?: string;
    name?: string;
    value?: number;
    onDemand?: boolean;
    productType?: ProductTypeEnum;
    fiscal?: FiscalInformationInterface;
    composition?: CompositionInterface[];
}
