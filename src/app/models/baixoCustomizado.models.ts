import { CorBaixo } from "./corBaixo.models";
import { ModeloBaseBaixo } from "./modeloBaseBaixo.models";

export class BaixoCustomizado{
    id?: number|null;
    modeloBaseBaixo?: ModeloBaseBaixo;
    corBaixo!: CorBaixo;
    priceEstimated!: number;
}