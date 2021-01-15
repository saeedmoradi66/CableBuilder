import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService, NumberCoreService } from 'src/app/core';
import { ConductorCrossSection } from 'src/app/core/models/ConductorCrossSection';
import { CrossSectionEarth } from 'src/app/core/models/CrossSectionEarth';
import { CrossSectionNull } from 'src/app/core/models/CrossSectionNull';
import { CrossSectionPhase } from 'src/app/core/models/CrossSectionPhase';
import { NumberCoreEarth } from 'src/app/core/models/NumberCoreEarth';
import { NumberCoreNull } from 'src/app/core/models/NumberCoreNull';
import { NumberCorePhase } from 'src/app/core/models/NumberCorePhase';
import { ConductorCrossSectionService } from 'src/app/core/services/ConductorCrossSection.service';
import { CrossSectionService } from 'src/app/core/services/CrossSection.service';

@Component({
  selector: 'app-CrossSection',
  templateUrl: './CrossSection.component.html',
  styleUrls: ['./CrossSection.component.css']
})
export class CrossSectionComponent implements OnInit {
  numberCorePhaseList: NumberCorePhase[];
  numberCoreNullList: NumberCoreNull[];
  numberCoreEarthList: NumberCoreEarth[];
  crossSectionPhaseList: CrossSectionPhase[];
  crossSectionNullList: CrossSectionNull[];
  crossSectionEarthList: CrossSectionEarth[];
  error = '';
  isSuccess: boolean = false;
  errorMessages: string = '';


  isLoading: boolean = false;
  model: ConductorCrossSection;

  constructor(private conductorService: ConductorCrossSectionService,
    private numberCoreService: NumberCoreService,
    private crossSectionService: CrossSectionService,
    private _gloablService: GlobalService,
    private router: Router) { }

  numberCorePhaseID = new FormControl('', Validators.required);
  numberCoreNullID = new FormControl('', Validators.required);
  numberCoreEarthID = new FormControl('', Validators.required);
  crossSectionEarthID = new FormControl('', Validators.required);
  crossSectionNullID = new FormControl('', Validators.required);
  crossSectionPhaseID = new FormControl('', Validators.required);
  form1 = new FormGroup({
    numberCorePhaseID: this.numberCorePhaseID,
    numberCoreNullID: this.numberCoreNullID,
    numberCoreEarthID: this.numberCoreEarthID,
    crossSectionEarthID: this.crossSectionEarthID,
    crossSectionNullID: this.crossSectionNullID,
    crossSectionPhaseID: this.crossSectionPhaseID
  })

  ngOnInit(): void {
    this.GetNumberCorePhase();
    this.GetNumberCoreNull();
    this.GetNumberCoreEarth();
    this.GetCrossSectionEarth();
    this.GetCrossSectionNull();
    this.GetCrossSectionPhase();
    if (this._gloablService.CableBuilderNo > 0) {
      this.GetData();
    }
  }

  GetNumberCorePhase() {
    this.numberCoreService.GetPhase()
      .subscribe(response => {
        this.numberCorePhaseList = response;

      }
      );
  }

  GetNumberCoreNull() {
    this.numberCoreService.GetNull()
      .subscribe(response => {
        this.numberCoreNullList = response;

      }
      );
  }

  GetNumberCoreEarth() {
    this.crossSectionService.GetEarth()
      .subscribe(response => {
        this.crossSectionEarthList = response;

      }
      );
  }

  GetCrossSectionPhase() {
    this.crossSectionService.GetPhase()
      .subscribe(response => {
        this.crossSectionPhaseList = response;

      }
      );
  }

  GetCrossSectionNull() {
    this.crossSectionService.GetNull()
      .subscribe(response => {
        this.crossSectionNullList = response;

      }
      );
  }

  GetCrossSectionEarth() {
    this.numberCoreService.GetEarth()
      .subscribe(response => {
        this.numberCoreEarthList = response;

      }
      );
  }

  GetData() {
    this.conductorService.Get(this._gloablService.CableBuilderNo)
      .subscribe(response => {

        if (response != null) {
          this.model = response;
          this.numberCorePhaseID.setValue(this.model.numberCorePhaseID.toString());
          this.numberCoreNullID.setValue(this.model.numberCoreNullID.toString());
          this.numberCoreEarthID.setValue(this.model.numberCoreEarthID.toString());
          this.crossSectionEarthID.setValue(this.model.crossSectionEarthID.toString());
          this.crossSectionNullID.setValue(this.model.crossSectionNullID.toString());
          this.crossSectionPhaseID.setValue(this.model.crossSectionPhaseID.toString());
        }

      }
      );
  }



  submitForm() {
    this.model = new ConductorCrossSection();
    this.model.numberCorePhaseID = parseInt(this.numberCorePhaseID.value);
    this.model.numberCoreNullID = parseInt(this.numberCoreNullID.value);
    this.model.numberCoreEarthID = parseInt(this.numberCoreEarthID.value);
    this.model.crossSectionPhaseID = parseInt(this.crossSectionPhaseID.value);
    this.model.crossSectionNullID = parseInt(this.crossSectionNullID.value);
    this.model.crossSectionEarthID = parseInt(this.crossSectionEarthID.value);
    this.model.cableBuilderNo = this._gloablService.CableBuilderNo;
    this.isLoading = true;
    this.isSuccess = false;
    this.conductorService.Save(this.model)
      .subscribe(response => {
        this.isSuccess = true;

        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/home");
        }, 3000)
      }
      );


    this.isLoading = false;

  }


}
