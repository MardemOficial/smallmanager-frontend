import { AddressInterface } from "../../interfaces/address.interface";
import { PeopleInterface } from "../../interfaces/people.interface";
import { SalesInterface } from "./sales.interface";

export interface DeliveryInterface extends SalesInterface{
    custumer: PeopleInterface,
    adress: AddressInterface,
    shippingCost: number,
    deliveryPerson: string,
    datedelivery: Date
}
