import { Anneal } from "./Anneal";
import { Compaction } from "./Compaction";
import { ConductorResistance } from "./ConductorResistance";
import { ConductorShape } from "./ConductorShape";
import { CrossSection } from "./CrossSection";
import { DieSerries } from "./DieSerries";
import { LayLength } from "./LayLength";
import { NumberWire } from "./NumberWire";
import { OhmicResistance } from "./OhmicResistance";
import { WireDiameter } from "./WireDiameter";

export class ConductorOperation {

    cableBuilderNo: number;
    tempID: number;

    crossSection: CrossSection;

    numberWire: NumberWire;

    anneal: Anneal;
    ohmicResistance: OhmicResistance;

    wireDiameter: WireDiameter;
    maxWireDiameter: string;
    shape: ConductorShape;

    dieSerriesList: Array<DieSerries>;
    compaction: Compaction;
    dieDiamater1: string;
    maxDieDiamater1: string;
    dieDiamater2: string;
    maxDieDiamater2: string;
    dieDiamater3: string;
    maxDieDiamater3: string;
    dieDiamater4: string;
    maxDieDiamater4: string;
    layLength1: string;
    maxLayLength1: string;
    minLayLength1: string;
    layLength2: string;
    maxLayLength2: string;
    minLayLength2: string;
    layLength3: string;
    maxLayLength3: string;
    minLayLength3: string;
    layLength4: string;
    maxLayLength4: string;
    minLayLength4: string;
    direction1: string;
    direction2: string;
    direction3: string;
    direction4: string;
    processName: string;
}
