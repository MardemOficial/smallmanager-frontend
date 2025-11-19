export enum ProductOfferingsEnum {
  PRODUCT,
  EXPERIENCE,
}

export const PRODUCT_OFFERINGS_LABELS: Record<ProductOfferingsEnum, string> = {
  [ProductOfferingsEnum.EXPERIENCE]: 'Experiência',
  [ProductOfferingsEnum.PRODUCT]: 'Produto',
};
