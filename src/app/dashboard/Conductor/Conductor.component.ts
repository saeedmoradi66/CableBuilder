import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStorageService, GlobalService } from 'src/app/core';
import { Abbreviation } from 'src/app/core/models/Abbreviation';
import { Anneal } from 'src/app/core/models/Anneal';
import { Compaction } from 'src/app/core/models/Compaction';
import { ConductorActualDiameter } from 'src/app/core/models/ConductorActualDiameter';
import { ConductorClass } from 'src/app/core/models/ConductorClass';
import { ConductorMaterial } from 'src/app/core/models/ConductorMaterial';
import { ConductorOperation } from 'src/app/core/models/ConductorOperation';
import { ConductorResistance } from 'src/app/core/models/ConductorResistance';
import { Conductors } from 'src/app/core/models/Conductors';
import { ConductorShape } from 'src/app/core/models/ConductorShape';
import { ConductorType } from 'src/app/core/models/ConductorType';
import { CrossSection } from 'src/app/core/models/CrossSection';
import { Density } from 'src/app/core/models/Density';
import { DieSerries } from 'src/app/core/models/DieSerries';
import { HypotheticalDiameter } from 'src/app/core/models/HypotheticalDiameter';
import { LayLength } from 'src/app/core/models/LayLength';
import { NumberWire } from 'src/app/core/models/NumberWire';
import { OhmicResistance } from 'src/app/core/models/OhmicResistance';
import { Price } from 'src/app/core/models/Price';
import { Products } from 'src/app/core/models/Products';
import { StandardModel } from 'src/app/core/models/StandardModel';
import { Wastage } from 'src/app/core/models/Wastage';
import { Weight } from 'src/app/core/models/Weight';
import { WireDiameter } from 'src/app/core/models/WireDiameter';
import { AbbreviationService } from 'src/app/core/services/Abbreviation.service';
import { CompactionService } from 'src/app/core/services/Compaction.service';
import { ConductorActualDiameterService } from 'src/app/core/services/ConductorActualDiameter.service';
import { ConductorClassService } from 'src/app/core/services/ConductorClass.service';
import { ConductorMaterialService } from 'src/app/core/services/ConductorMaterial.service';
import { ConductorOperationService } from 'src/app/core/services/ConductorOperation.service';
import { ConductorsService } from 'src/app/core/services/Conductors.service';
import { ConductorShapeService } from 'src/app/core/services/ConductorShape.service';
import { ConductorTypeService } from 'src/app/core/services/ConductorType.service';
import { CrossSectionService } from 'src/app/core/services/CrossSection.service';
import { DensityService } from 'src/app/core/services/Density.service';
import { HypotheticalDiameterService } from 'src/app/core/services/HypotheticalDiameter.service';
import { NumberWireService } from 'src/app/core/services/NumberWire.service';
import { OhmicResistanceService } from 'src/app/core/services/OhmicResistance.service';
import { PriceService } from 'src/app/core/services/Price.service';
import { ProductsService } from 'src/app/core/services/Products.service';
import { StandardService } from 'src/app/core/services/Standard.service';
import { WastageService } from 'src/app/core/services/Wastage.service';
import { WeightService } from 'src/app/core/services/Weight.service';
import { WireDiameterService } from 'src/app/core/services/WireDiameter.service';

@Component({
  selector: 'app-Conductor',
  templateUrl: './Conductor.component.html',
  styleUrls: ['./Conductor.component.css']
})
export class ConductorComponent implements OnInit {

  annealList: Anneal[];
  conductorResistanceList: ConductorResistance[];
  dieSerriesList: DieSerries[];
  layLengthList: LayLength[];
  numberWire: NumberWire;
  wireDiameter: WireDiameter;
  crossSection: CrossSection;
  previewOperationModel: ConductorOperation = null;
  previewDrawingOperationModel: ConductorOperation = null;
  ConductorShapeList: ConductorShape[];
  ConductorTypeList: ConductorType[];
  ConductorClassList: ConductorClass[];
  ConductorMaterialList: ConductorMaterial[];
  OhmicResistanceList: OhmicResistance[];
  compactionList: Compaction[];
  //OhmicResistanceUnitList: OhmicResistanceUnit[];
  WeightList: Weight[];
  //WeightUnitList: WeightUnit[];
  ConductorActualDiameterList: ConductorActualDiameter[];
  //ConductorActualDiameterUnitList: ConductorActualDiameterUnit[];
  StandardModelList: StandardModel[];
  WastageList: Wastage[];
  //WastageUnitList: WastageUnit[];
  PriceList: Price[];
  //PriceUnitList: PriceUnit[];
  CrossSectionList: CrossSection[];
  //StrandNoList: StrandNo[];
  //StringDiameterList: StringDiameter[];
  HypotheticalDiameterList: HypotheticalDiameter[];
  // HypotheticalDiameterUnitList: HypotheticalDiameterUnit[];
  StandardList: StandardModel[];
  abbreviationList: Abbreviation[];
  densityList: Density[];
  productsList: Products[];
  wireDiameterList: WireDiameter[];
  numberWireList: NumberWire[];
  minExDiaList: ConductorActualDiameter[];
  maxExDiaList: ConductorActualDiameter[];
  model: Conductors;
  previewModel: Conductors = null;
  error = '';
  isSuccess: boolean = false;
  errorMessages: string = '';
  isLoading: boolean = false;
  isValid: boolean = true;
  conductorCode: string = "";
  constructor(private conductorService: ConductorsService,
    private conductorOperationService: ConductorOperationService,
    private ConductorShapeService: ConductorShapeService,
    private ConductorTypeService: ConductorTypeService,
    private ConductorClassService: ConductorClassService,
    private ConductorMaterialService: ConductorMaterialService,
    private OhmicResistanceService: OhmicResistanceService,
    private WeightService: WeightService,
    private ConductorActualDiameterService: ConductorActualDiameterService,
    private StandardService: StandardService,
    private WastageService: WastageService,
    private PriceService: PriceService,
    private CrossSectionService: CrossSectionService,
    private compactionService: CompactionService,
    private HypotheticalDiameterService: HypotheticalDiameterService,
    private productsService: ProductsService,
    private abbreviationService: AbbreviationService,
    private densityService: DensityService,
    private wireDiameterService: WireDiameterService,
    private numberWireService: NumberWireService,
    private _gloablService: GlobalService,
    private browserStorageService: BrowserStorageService,
    private router: Router) { }

  conductorShapeID = new FormControl('');
  conductorTypeID = new FormControl('', [Validators.required, Validators.min(1)]);
  conductorClassID = new FormControl('', [Validators.required, Validators.min(1)]);
  conductorMaterialID = new FormControl('', [Validators.required, Validators.min(1)]);
  ohmicResistanceID = new FormControl('');
  //ohmicResistanceUnitID = new FormControl('', Validators.required);
  weightID = new FormControl('');
  //weightUnitID = new FormControl('', Validators.required);
  conductorActualDiameterID = new FormControl('');
  minExDiaID = new FormControl('');
  maxExDiaID = new FormControl('');
  //conductorActualDiameterUnitID = new FormControl('', Validators.required);
  standardID = new FormControl('', [Validators.required, Validators.min(1)]);
  wastageID = new FormControl('');
  //wastageUnitID = new FormControl('', Validators.required);
  priceID = new FormControl('');
  //priceUnitID = new FormControl('', Validators.required);
  crossSectionID = new FormControl('', [Validators.required, Validators.min(1)]);
  //strandNoID = new FormControl('', Validators.required);
  //stringDiameterID = new FormControl('', Validators.required);
  hypotheticalDiameterID = new FormControl('');
  //hypotheticalDiameterUnitID = new FormControl('', Validators.required);
  compactionID = new FormControl('', [Validators.required, Validators.min(1)]);
  productsID = new FormControl('', [Validators.required, Validators.min(1)]);
  abbreviationID = new FormControl('');
  densityID = new FormControl('');
  wireDiameterID = new FormControl('');
  numberWireID = new FormControl('');
  form1 = new FormGroup({
    conductorShapeID: this.conductorShapeID,
    conductorTypeID: this.conductorTypeID,
    conductorClassID: this.conductorClassID,
    conductorMaterialID: this.conductorMaterialID,
    ohmicResistanceID: this.ohmicResistanceID,
    //ohmicResistanceUnitID: this.ohmicResistanceUnitID,
    weightID: this.weightID,
    //weightUnitID: this.weightUnitID,
    conductorActualDiameterID: this.conductorActualDiameterID,
    //conductorActualDiameterUnitID: this.conductorActualDiameterUnitID,
    standardID: this.standardID,
    wastageID: this.wastageID,
    //wastageUnitID: this.wastageUnitID,
    priceID: this.priceID,
    //priceUnitID: this.priceUnitID,
    crossSectionID: this.crossSectionID,
    //strandNoID: this.strandNoID,
    //stringDiameterID: this.stringDiameterID,
    hypotheticalDiameterID: this.hypotheticalDiameterID,
    //hypotheticalDiameterUnitID: this.hypotheticalDiameterUnitID,
    compactionID: this.compactionID,
    abbreviationID: this.abbreviationID,
    productsID: this.productsID,
    densityID: this.densityID,
    wireDiameterID: this.wireDiameterID,
    numberWireID: this.numberWireID,
    minExDiaID: this.minExDiaID,
    maxExDiaID: this.maxExDiaID
  })

  ngOnInit(): void {
    this.GetConductorShape();
    this.GetConductorType();
    this.GetConductorClass();
    this.GetConductorMaterial();
    this.GetStandard();
    this.GetAbbreviation();
    this.GetProducts();
    this.GetConductorActualDiameter();
    this.GetHypotheticalDiameter();
    this.GetNumberWire();
    this.GetOhmicResistance();
    this.GetPrice();
    this.GetWastage();
    this.GetWeight();
    this.GetWireDiameter();
    this.GetDensity();
    this.GetCompaction();
    this.GetMinExDia();
    this.GetMaxExDia();
    if (this._gloablService.CableBuilderNo == 0 && this.browserStorageService.getSession("CableBuilderNo") != null) {
      this._gloablService.CableBuilderNo = parseInt(this.browserStorageService.getSession("CableBuilderNo"));
    }
    if (this._gloablService.TempID == 0 && this.browserStorageService.getSession("TempID") != null) {
      this._gloablService.TempID = parseInt(this.browserStorageService.getSession("TempID"));
    }
    if (this._gloablService.CableBuilderNo > 0 || this._gloablService.TempID > 0) {
      this.GetData();
    }
    else {
      this.isValid = false;
    }
    this.disable();
  }

  GetCompaction() {
    this.compactionService.Get()
      .subscribe(response => {
        this.compactionList = response;

      }
      );
  }

  GetConductorType() {
    this.ConductorTypeService.Get()
      .subscribe(response => {
        this.ConductorTypeList = response;

      }
      );
  }

  GetConductorClass() {
    this.ConductorClassService.Get()
      .subscribe(response => {
        this.ConductorClassList = response;

      }
      );
  }

  GetConductorMaterial() {
    this.ConductorMaterialService.Get()
      .subscribe(response => {
        this.ConductorMaterialList = response;

      }
      );
  }

  GetOhmicResistance() {
    this.OhmicResistanceService.Get()
      .subscribe(response => {
        this.OhmicResistanceList = response;

      }
      );
  }

  GetOhmicResistanceUnit() {
    // this.OhmicResistanceService.GetUnit()
    //   .subscribe(response => {
    //     this.OhmicResistanceUnitList = response;

    //   }
    //   );
  }

  GetWeight() {
    this.WeightService.Get()
      .subscribe(response => {
        this.WeightList = response;

      }
      );
  }

  GetWeightUnit() {
    // this.WeightService.GetUnit()
    //   .subscribe(response => {
    //     this.WeightUnitList = response;

    //   }
    //   );
  }

  GetConductorActualDiameter() {
    this.ConductorActualDiameterService.Get()
      .subscribe(response => {
        this.ConductorActualDiameterList = response;

      }
      );
  }

  GetMinExDia() {
    this.ConductorActualDiameterService.GetMin()
      .subscribe(response => {
        this.minExDiaList = response;

      }
      );
  }

  GetMaxExDia() {
    this.ConductorActualDiameterService.GetMax()
      .subscribe(response => {
        this.maxExDiaList = response;

      }
      );
  }

  GetConductorActualDiameterUnit() {
    // this.ConductorActualDiameterService.GetUnit()
    //   .subscribe(response => {
    //     this.ConductorActualDiameterUnitList = response;

    //   }
    //   );
  }

  GetStandard() {
    this.StandardService.Get()
      .subscribe(response => {
        this.StandardList = response;

      }
      );
  }

  GetWastage() {
    this.WastageService.Get()
      .subscribe(response => {
        this.WastageList = response;

      }
      );
  }

  GetWastageUnit() {
    // this.WastageService.GetUnit()
    //   .subscribe(response => {
    //     this.WastageUnitList = response;

    //   }
    //   );
  }

  GetPrice() {
    this.PriceService.Get()
      .subscribe(response => {
        this.PriceList = response;

      }
      );
  }

  GetPriceUnit() {
    // this.PriceService.GetUnit()
    //   .subscribe(response => {
    //     this.PriceUnitList = response;

    //   }
    //   );
  }

  GetCrossSection() {
    this.CrossSectionService.Get()
      .subscribe(response => {
        this.CrossSectionList = response;

      }
      );
  }

  GetStrandNo() {
    // this.StrandNoService.Get()
    //   .subscribe(response => {
    //     this.StrandNoList = response;

    //   }
    //   );
  }

  GetStringDiameter() {
    // this.StringDiameterService.Get()
    //   .subscribe(response => {
    //     this.StringDiameterList = response;

    //   }
    //   );
  }

  GetConductorShape() {
    this.ConductorShapeService.Get()
      .subscribe(response => {
        this.ConductorShapeList = response;

      }
      );
  }

  GetHypotheticalDiameter() {
    this.HypotheticalDiameterService.Get()
      .subscribe(response => {
        this.HypotheticalDiameterList = response;

      }
      );
  }

  GetHypotheticalDiameterUnit() {
    // this.HypotheticalDiameterService.GetUnit()
    //   .subscribe(response => {
    //     this.HypotheticalDiameterUnitList = response;

    //   }
    //   );
  }

  GetAbbreviation() {
    this.abbreviationService.Get()
      .subscribe(response => {
        this.abbreviationList = response;

      }
      );
  }

  GetDensity() {
    this.densityService.Get()
      .subscribe(response => {
        this.densityList = response;

      }
      );
  }

  GetProducts() {
    this.productsService.Get()
      .subscribe(response => {
        this.productsList = response;

      }
      );
  }

  GetWireDiameter() {
    this.wireDiameterService.Get()
      .subscribe(response => {
        this.wireDiameterList = response;

      }
      );
  }

  GetNumberWire() {
    this.numberWireService.Get()
      .subscribe(response => {
        this.numberWireList = response;

      }
      );
  }

  changeClass(classID, compactionID, materialID) {

    if (classID > 0 && compactionID > 0 && materialID > 0) {
      this.conductorService.FillCrossSection(classID, compactionID, materialID)
        .subscribe(response => {
          this.CrossSectionList = response;

        }
        );
    }

  }

  FilterCross(classID) {

    let materialID = parseInt(this.conductorMaterialID.value);
    let compactionID = parseInt(this.compactionID.value);
    if (classID > 0 && compactionID > 0 && materialID > 0) {
      this.conductorService.FillCrossSection(classID, compactionID, materialID)
        .subscribe(response => {
          this.CrossSectionList = response;

        }
        );
    }

  }

  changeCross(crossID) {
    let classID = parseInt(this.conductorClassID.value);
    let materialID = parseInt(this.conductorMaterialID.value);
    let compactionID = parseInt(this.compactionID.value);
    this.Search(classID, crossID, materialID, compactionID);

  }

  private Search(classID: number, crossID: any, materialID: number, compactionID: number) {
    if (classID > 0 && crossID > 0 && materialID > 0 && compactionID > 0) {
      this.conductorService.Search(classID, crossID, materialID, compactionID)
        .subscribe(response => {
          this.SetValue(response);

        }
        );
    }
  }

  changeMaterial(materialID) {
    let classID = parseInt(this.conductorClassID.value);
    //let crossID = parseInt(this.crossSectionID.value);
    let compactionID = parseInt(this.compactionID.value);
    if (classID > 0 && compactionID > 0 && materialID > 0) {
      this.conductorService.FillCrossSection(classID, compactionID, materialID)
        .subscribe(response => {
          this.CrossSectionList = response;

        }
        );
    }

  }

  changeCompaction(compactionID) {
    let classID = parseInt(this.conductorClassID.value);
    //let crossID = parseInt(this.crossSectionID.value);
    let materialID = parseInt(this.conductorMaterialID.value);
    if (classID > 0 && compactionID > 0 && materialID > 0) {
      this.conductorService.FillCrossSection(classID, compactionID, materialID)
        .subscribe(response => {
          this.CrossSectionList = response;

        }
        );
    }

  }

  GetData() {
    this.conductorService.Get(this._gloablService.CableBuilderNo, this._gloablService.TempID)
      .subscribe(response => {



        if (response != null) {
          this.changeClass(response.conductorClassID, response.compactionID, response.conductorMaterialID);

        }
        this.SetValue(response);
      }
      );
  }



  private SetValue(response: Conductors) {
    if (response != null) {
      this.model = new Conductors();
      this.model = response;
      if (this.model.conductorShapeID != null)
        this.conductorShapeID.setValue(this.model.conductorShapeID.toString());
      if (this.model.conductorActualDiameterID != null)
        this.conductorActualDiameterID.setValue(this.model.conductorActualDiameterID.toString());
      if (this.model.minExDiaID != null)
        this.minExDiaID.setValue(this.model.minExDiaID.toString());
      if (this.model.maxExDiaID != null)
        this.maxExDiaID.setValue(this.model.maxExDiaID.toString());
      //this.conductorActualDiameterUnitID.setValue(this.model.conductorActualDiameterUnitID.toString());
      if (this.model.conductorClassID != null)
        this.conductorClassID.setValue(this.model.conductorClassID.toString());
      if (this.model.conductorMaterialID != null)
        this.conductorMaterialID.setValue(this.model.conductorMaterialID.toString());
      if (this.model.conductorTypeID != null)
        this.conductorTypeID.setValue(this.model.conductorTypeID.toString());
      if (this.model.priceID != null)
        this.priceID.setValue(this.model.priceID.toString());
      //this.priceUnitID.setValue(this.model.priceUnitID.toString());
      if (this.model.hypotheticalDiameterID != null)
        this.hypotheticalDiameterID.setValue(this.model.hypotheticalDiameterID.toString());
      //this.hypotheticalDiameterUnitID.setValue(this.model.hypotheticalDiameterUnitID.toString());
      if (this.model.compactionID != null)
        this.compactionID.setValue(this.model.compactionID);
      //this.strandNoID.setValue(this.model.strandNoID.toString());
      // this.stringDiameterID.setValue(this.model.stringDiameterID.toString());
      if (this.model.standardID != null)
        this.standardID.setValue(this.model.standardID.toString());
      if (this.model.ohmicResistanceID != null)
        this.ohmicResistanceID.setValue(this.model.ohmicResistanceID.toString());
      //this.ohmicResistanceUnitID.setValue(this.model.ohmicResistanceUnitID.toString());
      if (this.model.crossSectionID != null)
        this.crossSectionID.setValue(this.model.crossSectionID.toString());
      if (this.model.wastageID != null)
        this.wastageID.setValue(this.model.wastageID.toString());
      //this.wastageUnitID.setValue(this.model.wastageUnitID.toString());
      if (this.model.weightID != null)
        this.weightID.setValue(this.model.weightID.toString());
      //this.weightUnitID.setValue(this.model.weightUnitID.toString());
      if (this.model.abbreviationID != null)
        this.abbreviationID.setValue(this.model.abbreviationID.toString());
      if (this.model.productsID != null)
        this.productsID.setValue(this.model.productsID.toString());
      if (this.model.densityID != null)
        this.densityID.setValue(this.model.densityID.toString());
      if (this.model.wireDiameterID != null)
        this.wireDiameterID.setValue(this.model.wireDiameterID.toString());
      if (this.model.numberWireID != null)
        this.numberWireID.setValue(this.model.numberWireID.toString());

      this.conductorCode = this.model.conductorMaterial.conductorMaterialTitle + ' - ' + this.model.crossSection.crossSectionTitle + ' - ' + this.model.conductorClass.conductorClassTitle + ' - ' + this.model.conductorShape.conductorShapeTitle;
    }
    else {

      this.conductorShapeID.setValue(0);

      this.conductorActualDiameterID.setValue(0);


      // this.conductorTypeID.setValue(0);

      this.priceID.setValue(0);

      this.hypotheticalDiameterID.setValue(0);



      // this.standardID.setValue(0);

      this.ohmicResistanceID.setValue(0);



      this.wastageID.setValue(0);

      this.weightID.setValue(0);

      this.abbreviationID.setValue(0);

      //  this.productsID.setValue(0);

      this.densityID.setValue(0);

      this.wireDiameterID.setValue(0);

      this.numberWireID.setValue(0);

    }
  }

  submitForm() {
    this.model = new Conductors();
    this.model.conductorShapeID = parseInt(this.conductorShapeID.value);
    this.model.conductorClassID = parseInt(this.conductorClassID.value);
    this.model.conductorMaterialID = parseInt(this.conductorMaterialID.value);
    this.model.conductorTypeID = parseInt(this.conductorTypeID.value);
    this.model.conductorActualDiameterID = parseInt(this.conductorActualDiameterID.value);
    this.model.minExDiaID = parseInt(this.minExDiaID.value);
    this.model.maxExDiaID = parseInt(this.maxExDiaID.value);
    //this.model.conductorActualDiameterUnitID = parseInt(this.conductorActualDiameterUnitID.value);
    this.model.ohmicResistanceID = parseInt(this.ohmicResistanceID.value);
    //this.model.ohmicResistanceUnitID = parseInt(this.ohmicResistanceUnitID.value);
    this.model.hypotheticalDiameterID = parseInt(this.hypotheticalDiameterID.value);
    //this.model.hypotheticalDiameterUnitID = parseInt(this.hypotheticalDiameterUnitID.value);
    this.model.priceID = parseInt(this.priceID.value);
    //this.model.priceUnitID = parseInt(this.priceUnitID.value);
    this.model.weightID = parseInt(this.weightID.value);
    //this.model.weightUnitID = parseInt(this.weightUnitID.value);
    this.model.wastageID = parseInt(this.wastageID.value);
    //this.model.wastageUnitID = parseInt(this.wastageUnitID.value);
    //this.model.strandNoID = parseInt(this.strandNoID.value);
    // this.model.stringDiameterID = parseInt(this.stringDiameterID.value);
    this.model.standardID = parseInt(this.standardID.value);
    this.model.crossSectionID = parseInt(this.crossSectionID.value);
    this.model.compactionID = this.compactionID.value;
    this.model.abbreviationID = parseInt(this.abbreviationID.value);
    this.model.densityID = parseInt(this.densityID.value);
    this.model.productsID = parseInt(this.productsID.value);
    this.model.wireDiameterID = parseInt(this.wireDiameterID.value);
    this.model.numberWireID = parseInt(this.numberWireID.value);
    this.model.cableBuilderNo = this._gloablService.CableBuilderNo;
    this.model.tempID = this._gloablService.TempID;
    this.isLoading = true;
    this.isSuccess = false;
    this.conductorService.Save(this.model)
      .subscribe(response => {
        this.isSuccess = true;
        this.model = response;

        this.previewModel = new Conductors();
        this.previewModel = response;
      }
      );


    this.isLoading = false;

  }
  disable() {
    this.conductorActualDiameterID.disable();
    this.ohmicResistanceID.disable();
    this.densityID.disable();
    this.weightID.disable();
    this.wastageID.disable();
    this.priceID.disable();
    this.wireDiameterID.disable();
    this.numberWireID.disable();
    this.hypotheticalDiameterID.disable();
    this.minExDiaID.disable();
    this.maxExDiaID.disable();
    this.abbreviationID.disable();
    this.conductorShapeID.disable();
  }
  r: string;
  PreviewConductorOperation() {
    this.conductorOperationService.Get(this._gloablService.CableBuilderNo, this._gloablService.TempID)
      .subscribe(response => {

        if (response != null) {
          this.previewOperationModel = new ConductorOperation();
          this.previewOperationModel = response;

          if (this.previewOperationModel.dieDiamater1 != null)
            this.previewOperationModel.maxDieDiamater1 = (parseFloat(this.previewOperationModel.dieDiamater1) + 0.1).toFixed(2).toString();
          if (this.previewOperationModel.dieDiamater2 != null)
            this.previewOperationModel.maxDieDiamater2 = (parseFloat(this.previewOperationModel.dieDiamater2) + 0.1).toFixed(2).toString();
          if (this.previewOperationModel.dieDiamater3 != null)
            this.previewOperationModel.maxDieDiamater3 = (parseFloat(this.previewOperationModel.dieDiamater3) + 0.1).toFixed(2).toString();
          if (this.previewOperationModel.dieDiamater4 != null)
            this.previewOperationModel.maxDieDiamater4 = (parseFloat(this.previewOperationModel.dieDiamater4) + 0.1).toFixed(2).toString();

          if (parseFloat(this.previewOperationModel.wireDiameter.wireDiameterTitle) <= 0.5) {
            this.previewOperationModel.maxWireDiameter = (parseFloat(this.previewOperationModel.wireDiameter.wireDiameterTitle) + 0.005).toFixed(2).toString();
          }
          else if (parseFloat(this.previewOperationModel.wireDiameter.wireDiameterTitle) > 0.5) {
            this.previewOperationModel.maxWireDiameter = (parseFloat(this.previewOperationModel.wireDiameter.wireDiameterTitle) + 0.01).toFixed(2).toString()
          }
          // this.annealID.setValue(this.model.annealID.toString());
          // this.layLengthID.setValue(this.model.layLengthID.toString());
          // this.dieSerriesID.setValue(this.model.dieSerriesID.toString());
          // this.wireDiameterID.setValue(this.model.wireDiameterID.toString());
          // this.numberWireID.setValue(this.model.numberWireID.toString());
          // this.conductorResistanceID.setValue(this.model.conductorResistanceID.toString());

          // this.crossSectionID.setValue(this.model.crossSectionID.toString());

        }

      }
      );
  }
  PreviewDrawingOperation() {
    this.conductorOperationService.GetDrawing(this._gloablService.CableBuilderNo, this._gloablService.TempID)
      .subscribe(response => {

        if (response != null) {
          this.previewDrawingOperationModel = new ConductorOperation();
          this.previewDrawingOperationModel = response;

        }

      }
      );
  }
  Done() {
    this.router.navigateByUrl("/dashboard/Conductor");
  }

}
