import { PaginationInterface } from "../../interfaces/pagination.interface";
import { BenefitInterface } from "./benefit.interface";

export interface BenefitListInterface extends PaginationInterface {
    benefitList: BenefitInterface[],
}
