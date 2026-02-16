import { TipoAcessorio } from "./tipoAcessorio.models";

export class Acessorio{
    id?: number|null;
    tipoAcessorio?: TipoAcessorio|null;
    marcaAcessorios?: string|null;
    material?: string|null;
}