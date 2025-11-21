import { PaymentTypeEnum } from "../enums/payment-type.enum";
import { PaymentStatusEnum } from "../enums/payment-status.enum";

export interface PaymentInterface {
    id?: string,
    paymentMethod: PaymentTypeEnum,
    quantity: number,
    status: PaymentStatusEnum,
}
