import { CrossSectionEarth } from './CrossSectionEarth';
import { CrossSectionNull } from './CrossSectionNull';
import { CrossSectionPhase } from './CrossSectionPhase';
import { NumberCoreEarth } from './NumberCoreEarth';
import { NumberCoreNull } from './NumberCoreNull';
import { NumberCorePhase } from './NumberCorePhase';

export class ConductorCrossSection {
    conductorCrossSectionID: number;
    numberCorePhaseID: number;
    numberCorePhase: NumberCorePhase;
    numberCoreNull: NumberCoreNull;
    numberCoreEarth: NumberCoreEarth;
    numberCoreNullID: number;
    numberCoreEarthID: number;
    crossSectionPhaseID: number;
    crossSectionNullID: number;
    crossSectionEarthID: number;

    crossSectionPhase: CrossSectionPhase;
    crossSectionNull: CrossSectionNull;
    crossSectionEarth: CrossSectionEarth;
  cableBuilderNo: number;
}
