import { PeopleInterface } from '../../interfaces/people.interface';
import { EmployeeContractInterface } from '../../interfaces/employee-contract.interface';
import { BenefitInterface } from '../benefit/benefit.interface';
import { PayrolltaxesInterface } from '../payrollTaxes/payrolltaxes.interface';
import { PositionInterface } from '../position/position.interface';
import { ContactInterface } from '../../interfaces/contact.interface';
import { AddressInterface } from '../../interfaces/address.interface';

export interface EmployeeInterface {
    people: PeopleInterface;
    contact?: ContactInterface;
    address?: AddressInterface;
    employeeContract?: EmployeeContractInterface;
    benefit?: BenefitInterface;
    payrollTaxes?: PayrolltaxesInterface;
    position?: PositionInterface;
}
