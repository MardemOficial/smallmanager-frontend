export enum SalesTypeEnum {
    IN_STORY,
    DELIVERY
}

export const SALES_TYPE_LABEL: Record<SalesTypeEnum, string> = {
  [SalesTypeEnum.IN_STORY]: 'Presencial',
  [SalesTypeEnum.DELIVERY]: 'Entrega',
};