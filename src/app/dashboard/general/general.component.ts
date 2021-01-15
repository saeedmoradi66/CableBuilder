import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { APP_CONFIG, BrowserStorageService, GlobalService, IAppConfig } from 'src/app/core';
import { CableTypeModel } from 'src/app/core/models/CableTypeModel';
import { GeneralModel } from 'src/app/core/models/GeneralModel';
import { VoltageModel } from 'src/app/core/models/VoltageModel';
import { CableTypeService } from 'src/app/core/services/CableType.service';
import { GeneralService } from 'src/app/core/services/General.service';
import { VoltageService } from 'src/app/core/services/Voltage.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  // standardList: StandardModel[];
  voltageList: VoltageModel[];
  cableTypeList: CableTypeModel[];
  error = '';
  isSuccess: boolean = false;
  errorMessages: string = '';


  isLoading: boolean = false;
  model: GeneralModel;
  cableType = new FormControl('', [Validators.required, Validators.min(1)]);
  // standard = new FormControl('', Validators.required);
  voltage = new FormControl('', [Validators.required, Validators.min(1)]);
  form1 = new FormGroup({
    // standard: this.standard,
    voltage: this.voltage,
    cableType: this.cableType
  });
  constructor(private generalService: GeneralService,
    // private standardService: StandardService,
    private voltageService: VoltageService,
    private cableTypeService: CableTypeService,
    private _gloablService: GlobalService,
    private browserStorageService: BrowserStorageService,
    private router: Router) { }
  // form1 = this.fb.group({
  //   cableType: [0, [Validators.required, Validators.min(1)]],
  //   standard: [0, [Validators.required, Validators.min(1)]],
  //   voltage: [0, [Validators.required, Validators.min(1)]]

  // });
  ngOnInit(): void {
    // this.GetStandard();
    this.GetCableType();
    //this.GetVoltage();

    if (this._gloablService.CableBuilderNo == 0 && this.browserStorageService.getSession("CableBuilderNo") != null) {
      this._gloablService.CableBuilderNo = parseInt(this.browserStorageService.getSession("CableBuilderNo"));
    }
    if (this._gloablService.TempID == 0 && this.browserStorageService.getSession("TempID") != null) {
      this._gloablService.TempID = parseInt(this.browserStorageService.getSession("TempID"));
    }
    if (this._gloablService.CableBuilderNo > 0 || this._gloablService.TempID > 0) {
      this.GetData();
    }
  }

  // GetStandard() {
  //   this.standardService.Get()
  //     .subscribe(response => {
  //       this.standardList = response;

  //     }
  //     );
  // }

  GetVoltage() {
    this.voltageService.Get()
      .subscribe(response => {
        this.voltageList = response;

      }
      );
  }

  GetCableType() {
    this.cableTypeService.Get()
      .subscribe(response => {
        this.cableTypeList = response;

      }
      );
  }

  GetData() {
    this.generalService.Get(this._gloablService.CableBuilderNo, this._gloablService.TempID)
      .subscribe(response => {

        this.model = response;

        this.cableType.setValue(this.model.cableTypeID.toString());
        this.changeCableType(this.model.cableTypeID);
        // this.standard.setValue(this.model.standardID.toString());
        this.voltage.setValue(this.model.voltageID.toString());
      }
      );
  }



  submitForm() {
    this.model = new GeneralModel();
    // this.model.standardID = parseInt(this.standard.value);
    this.model.voltageID = parseInt(this.voltage.value);
    this.model.cableTypeID = parseInt(this.cableType.value);
    this.model.cableBuilderNo = this._gloablService.CableBuilderNo;
    this.model.tempID = this._gloablService.TempID;
    this.isLoading = true;
    this.isSuccess = false;
    this.generalService.Save(this.model)
      .subscribe(response => {
        this.isSuccess = true;
        this._gloablService.CableBuilderNo = response.cableBuilderNo;
        this._gloablService.TempID = response.tempID;
        this.browserStorageService.setSession("CableBuilderNo", response.cableBuilderNo);
        this.browserStorageService.setSession("TempID", response.tempID);

        this.router.navigateByUrl("/dashboard/Conductor");

      }
      );


    this.isLoading = false;

  }

  changeCableType(cableTypeID) {
    this.voltageService.GetByCableType(cableTypeID).subscribe(response => {
      this.voltageList = response;
      
    }
    );
  }
}
