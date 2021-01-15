import { CableTypeModel } from './CableTypeModel';
import { StandardModel } from './StandardModel';
import { VoltageModel } from './VoltageModel';

export class GeneralModel {
    generalID: number;
    cableTypeID: number;
    cableType: CableTypeModel;
    // standardID: number;
    // standard: StandardModel;
    voltageID: number;
    voltage: VoltageModel;
    cableBuilderNo: number;
    tempID: number;
}
