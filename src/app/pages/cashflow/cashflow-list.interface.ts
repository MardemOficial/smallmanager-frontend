import { CashflowInterface } from './cashflow.interface';

export interface CashflowListInterface {
  cashFlow: CashflowInterface[];
  page: number;
  pageSize: number;
  totalItems: number;
}
