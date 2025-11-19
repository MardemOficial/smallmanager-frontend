export enum CashflowTypeEnum {
  OPENING_BALANCE,
  CLOSING_BALANCE,
  CASH_DROP,
  SALE,
  REFUND,
}

export const CASHFLOW_TYPE_LABELS: Record<CashflowTypeEnum, string> = {
  [CashflowTypeEnum.OPENING_BALANCE]: 'Abertura de caixa',
  [CashflowTypeEnum.CLOSING_BALANCE]: 'Fechamento de caixa',
  [CashflowTypeEnum.CASH_DROP]: 'Sangria',
  [CashflowTypeEnum.SALE]: 'Venda',
  [CashflowTypeEnum.REFUND]: 'Estorno',
};
