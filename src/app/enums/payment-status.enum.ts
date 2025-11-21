export enum PaymentStatusEnum {
    PENDING,
    APPROVED,
}

export const PAYMENT_STATUS_LABEL: Record<PaymentStatusEnum, string> = {
  [PaymentStatusEnum.PENDING]: 'Pendente',
  [PaymentStatusEnum.APPROVED]: 'Aprovado',
};