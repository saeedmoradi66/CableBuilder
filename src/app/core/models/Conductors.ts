import { Abbreviation } from './Abbreviation';
import { Compaction } from './Compaction';
import { ConductorActualDiameter } from './ConductorActualDiameter';
import { ConductorActualDiameterUnit } from './ConductorActualDiameterUnit';
import { ConductorClass } from './ConductorClass';
import { ConductorMaterial } from './ConductorMaterial';
import { ConductorShape } from './ConductorShape';
import { ConductorType } from './ConductorType';
import { CrossSection } from './CrossSection';
import { Density } from './Density';
import { HypotheticalDiameter } from './HypotheticalDiameter';
import { HypotheticalDiameterUnit } from './HypotheticalDiameterUnit';
import { NumberWire } from './NumberWire';
import { OhmicResistance } from './OhmicResistance';
import { OhmicResistanceUnit } from './OhmicResistanceUnit';
import { Price } from './Price';
import { PriceUnit } from './PriceUnit';
import { Products } from './Products';
import { StandardModel } from './StandardModel';
import { StrandNo } from './StrandNo';
import { StringDiameter } from './StringDiameter';
import { Wastage } from './Wastage';
import { WastageUnit } from './WastageUnit';
import { Weight } from './Weight';
import { WeightUnit } from './WeightUnit';
import { WireDiameter } from './WireDiameter';

export class Conductors {
    conductorsID: number;
    conductorShapeID: number;
    conductorShape: ConductorShape;
    conductorTypeID: number;
    conductorType: ConductorType;
    conductorClassID: number;
    conductorClass: ConductorClass;
    conductorMaterial: ConductorMaterial;
    conductorMaterialID: number;
    ohmicResistanceID: number;
    ohmicResistance: OhmicResistance;
    ohmicResistanceUnitID: number;
    ohmicResistanceUnit: OhmicResistanceUnit;
    weightUnit: WeightUnit;
    weightUnitID: number;
    weightID: number;
    weight: Weight;
    conductorActualDiameterID: number;
    conductorActualDiameter: ConductorActualDiameter;
    conductorActualDiameterUnitID: number;
    conductorActualDiameterUnit: ConductorActualDiameterUnit;
    hypotheticalDiameterID: number;
    hypotheticalDiameter: HypotheticalDiameter;
    hypotheticalDiameterUnitID: number;
    hypotheticalDiameterUnit: HypotheticalDiameterUnit;
    priceID: number;
    price: Price;
    priceUnitID: number;
    priceUnit: PriceUnit;
    compactionID: number;
    compaction: Compaction;
    // strandNoID: number;
    // strandNo: StrandNo;
    // stringDiameterID: number;
    // stringDiameter: StringDiameter;
    standard: StandardModel;
    standardID: number;
    crossSection: CrossSection;
    crossSectionID: number;
    wastage: Wastage;
    wastageID: number;
    wastageUnit: WastageUnit;
    wastageUnitID: number;
    products: Products;
    productsID: number;
    abbreviation: Abbreviation;
    abbreviationID: number;
    density: Density;
    densityID: number;
    wireDiameter: WireDiameter;
    wireDiameterID: number;
    numberWire: NumberWire;
    numberWireID: number;
    tempID: number;
    cableBuilderNo: number;
    isDeleted: boolean;
    minExDiaID: number;
    minExDia: ConductorActualDiameter;

    maxExDiaID: number;
    maxExDia: ConductorActualDiameter;
    conductorCode: string;
    
}
