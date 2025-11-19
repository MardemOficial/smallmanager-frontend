import { CashflowTypeEnum } from '../../enums/cashflow-type.enum';

export interface CashflowInterface {
    id?: string,
    cash_register_id?: number;
    type?: CashflowTypeEnum,
    amount?: number,
    is_inflow: boolean,
    create_at: Date,
    describe: string,
}
