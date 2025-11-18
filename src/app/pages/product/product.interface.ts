import { FiscalInformationInterface } from '../../interfaces/fiscal-information.interface';
import { CompositionInterface } from '../../interfaces/composition.interface';
import { ProductOfferingsEnum } from '../../enums/product-offerings.enum';

export interface ProductInterface {
  id?: string;
  sku?: string;
  name?: string;
  value?: number;
  onDemand?: boolean;
  productType?: ProductOfferingsEnum;
  fiscal?: FiscalInformationInterface;
  composition?: CompositionInterface[];
}
