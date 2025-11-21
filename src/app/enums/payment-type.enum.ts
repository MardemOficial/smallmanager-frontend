export enum PaymentTypeEnum {
  PIX,
  CASH,
  DEBIT_CARD,
  CREDIT_CARD,
  BANK_TRANSFER,
  FOOD_VOUCHER,
  MEAL_VOUCHER,
}

export const PAYMENT_TYPE_LABEL: Record<PaymentTypeEnum, string> = {
  [PaymentTypeEnum.PIX]: 'Pix',
  [PaymentTypeEnum.CASH]: 'Dinheiro',
  [PaymentTypeEnum.DEBIT_CARD]: 'Cartão de débito',
  [PaymentTypeEnum.CREDIT_CARD]: 'Cartão de credito',
  [PaymentTypeEnum.BANK_TRANSFER]: 'Transferência bancária',
  [PaymentTypeEnum.FOOD_VOUCHER]: 'Vale alimentação',
  [PaymentTypeEnum.MEAL_VOUCHER]: 'Vale refeição',
};
