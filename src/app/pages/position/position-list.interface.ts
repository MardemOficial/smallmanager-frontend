import { PositionInterface } from "./position.interface";

export interface PositionListInterface {
    profileList: PositionInterface[];
    page: number;
    limit: number;
    totalElements: number;
}
