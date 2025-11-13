import { PaymentPeopleInterface } from "./payment-people.interface";
import { TermInterface } from "./term.interface";

export interface EmployeeContractInterface {
    id?: string;
    contractType: string;
    pis?: string;
    paymentPeople?: PaymentPeopleInterface;
    term?: TermInterface[];
}
