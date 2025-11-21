import { SalesTypeEnum } from './sales-type.enum';
import { PaymentInterface } from '../../interfaces/payment.interface';
import { SalesItemInterface } from './sales-item.interface';
import { SalesStatusEnum } from './sales-status.enum';

export interface SalesInterface {
    id?: string,
    idOrder: string,
    salesType?: SalesTypeEnum,
    date?: Date,
    salesStatus: SalesStatusEnum,
    listSalesItens: SalesItemInterface[],
    payment: PaymentInterface,
    subtotal: number,
    discount: number,
    grand_total: number,
}
