import { UsuarioInterface } from "./usuario.interface";

export interface UsuarioListInterface {
    listUser: UsuarioInterface[];
    page: number;
    limit: number;
    totalElements: number;
}
