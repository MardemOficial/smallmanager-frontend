export enum ProductTypeEnum {
    ABSTRATO = 1,
    CONCRETO = 2,
}

export const PRODUCT_TYPE_LABELS: Record<ProductTypeEnum, string> = {
  [ProductTypeEnum.ABSTRATO]: 'Abstrato',
  [ProductTypeEnum.CONCRETO]: 'Concreto',
};