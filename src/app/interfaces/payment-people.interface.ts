import { BankInformationInterface } from "./bank-information.interface";
import { PixInformationInterface } from "./pix-information.interface";

export interface PaymentPeopleInterface {
    id?: string;
    salary: number;
    bank: BankInformationInterface;
    pix: PixInformationInterface;
}
