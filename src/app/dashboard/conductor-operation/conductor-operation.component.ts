import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserStorageService, GlobalService } from 'src/app/core';
import { Anneal } from 'src/app/core/models/Anneal';
import { ConductorOperation } from 'src/app/core/models/ConductorOperation';
import { ConductorResistance } from 'src/app/core/models/ConductorResistance';
import { CrossSection } from 'src/app/core/models/CrossSection';
import { DieSerries } from 'src/app/core/models/DieSerries';
import { LayLength } from 'src/app/core/models/LayLength';
import { NumberWire } from 'src/app/core/models/NumberWire';
import { OhmicResistance } from 'src/app/core/models/OhmicResistance';
import { WireDiameter } from 'src/app/core/models/WireDiameter';
import { ConductorOperationService } from 'src/app/core/services/ConductorOperation.service';


@Component({
  selector: 'app-conductor-operation',
  templateUrl: './conductor-operation.component.html',
  styleUrls: ['./conductor-operation.component.css']
})
export class ConductorOperationComponent implements OnInit {


  annealList: Anneal[];
  conductorResistance: OhmicResistance;
  dieSerriesList: DieSerries[];
  layLengthList: LayLength[];
  numberWire: NumberWire;
  wireDiameter: WireDiameter;
  crossSection: CrossSection;

  model: ConductorOperation;
  previewModel: ConductorOperation = null;
  error = '';
  isSuccess: boolean = false;
  errorMessages: string = '';
  isLoading: boolean = false;
  isValid: boolean = true;
  constructor(private conductorService: ConductorOperationService,
    
    private browserStorageService: BrowserStorageService,
    private _gloablService: GlobalService,
    private router: Router) { }

  // annealID = new FormControl('', Validators.required);
  // conductorResistanceID = new FormControl('', Validators.required);
  // dieSerriesID = new FormControl('', Validators.required);
  // layLengthID = new FormControl('', Validators.required);
  // numberWireID = new FormControl('', Validators.required);
  // wireDiameterID = new FormControl('', Validators.required);
  // crossSectionID = new FormControl('', Validators.required);


  // form1 = new FormGroup({
  //   annealID: this.annealID,
  //   conductorResistanceID: this.conductorResistanceID,
  //   dieSerriesID: this.dieSerriesID,
  //   layLengthID: this.layLengthID,
  //   numberWireID: this.numberWireID,
  //   wireDiameterID: this.wireDiameterID,
  //   crossSectionID: this.crossSectionID

  // })

  ngOnInit(): void {
    // this.GetAnneal();
    // this.GetConductorResistance();
    // this.GetDieSerries();
    // this.GetLayLength();
    // this.GetWireDiameter();
    // this.GetNumberWire();
    // this.GetCrossSection();

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

  }


  // GetAnneal() {
  //   this.annealService.Get()
  //     .subscribe(response => {
  //       this.annealList = response;

  //     }
  //     );
  // }
  // GetConductorResistance() {
  //   this.conductorResistanceService.Get()
  //     .subscribe(response => {
  //       this.conductorResistanceList = response;

  //     }
  //     );
  // }
  // GetDieSerries() {
  //   this.dieSerriesService.Get()
  //     .subscribe(response => {
  //       this.dieSerriesList = response;

  //     }
  //     );
  // }
  // GetLayLength() {
  //   this.layLengthService.Get()
  //     .subscribe(response => {
  //       this.layLengthList = response;

  //     }
  //     );
  // }
  // GetNumberWire() {
  //   this.numberWireService.Get()
  //     .subscribe(response => {
  //       this.numberWireList = response;

  //     }
  //     );
  // }
  // GetWireDiameter() {
  //   this.wireDiameterService.Get()
  //     .subscribe(response => {
  //       this.wireDiameterList = response;

  //     }
  //     );
  // }


  // GetCrossSection() {
  //   this.crossSectionService.Get()
  //     .subscribe(response => {
  //       this.crossSectionList = response;

  //     }
  //     );
  // }



  GetData() {
    this.conductorService.Get(this._gloablService.CableBuilderNo, this._gloablService.TempID)
      .subscribe(response => {

        if (response != null) {
          this.previewModel = new ConductorOperation();
          this.previewModel = response;
         // this.annealList = this.previewModel.annealList;
          // this.conductorResistance = this.previewModel.resistance;
          // this.wireDiameter = this.previewModel.wireDiameter;
          // this.numberWire = this.previewModel.numberWire;
         
         
          // this.crossSection = this.previewModel.crossSection;
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



  // submitForm() {
  //   this.model = new ConductorOperation();
  //   this.model.annealID = parseInt(this.annealID.value);
  //   this.model.layLengthID = parseInt(this.layLengthID.value);
  //   this.model.dieSerriesID = parseInt(this.dieSerriesID.value);
  //   this.model.wireDiameterID = parseInt(this.wireDiameterID.value);
  //   this.model.numberWireID = parseInt(this.numberWireID.value);
  //   this.model.conductorResistanceID = parseInt(this.conductorResistanceID.value);
  //   this.model.crossSectionID = parseInt(this.crossSectionID.value);
  //   this.model.cableBuilderNo = this._gloablService.CableBuilderNo;
  //   this.model.tempID = this._gloablService.TempID;
  //   this.isLoading = true;
  //   this.isSuccess = false;
  //   this.conductorService.Save(this.model)
  //     .subscribe(response => {
  //       this.isSuccess = true;
  //       this.model = response;
  //       this.previewModel = new ConductorOperation();
  //       this.previewModel = response;
  //     }
  //     );


  //   this.isLoading = false;

  // }


  Done() {
    this.router.navigateByUrl("/dashboard/Conductor");
  }

}
