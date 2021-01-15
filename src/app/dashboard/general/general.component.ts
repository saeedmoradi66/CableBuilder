import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core';
import { CableTypeModel } from 'src/app/core/models/CableTypeModel';
import { StandardModel } from 'src/app/core/models/StandardModel';
import { VoltageModel } from 'src/app/core/models/VoltageModel';
import { CableTypeService } from 'src/app/core/services/CableType.service';
import { GeneralService } from 'src/app/core/services/General.service';
import { StandardService } from 'src/app/core/services/Standard.service';
import { VoltageService } from 'src/app/core/services/Voltage.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  standardList: StandardModel[];
  voltageList: VoltageModel[];
  cableTypeList: CableTypeModel[];
  constructor(private generalService: GeneralService, private standardService: StandardService, private voltageService: VoltageService, private cableTypeService: CableTypeService, private _gloablService: GlobalService) { }

  ngOnInit(): void {
    this.GetStandard();
    this.GetCableType();
    this.GetVoltage();
  }

   GetStandard() {
  this.standardService.Get()
    .subscribe(response => {
      this.standardList = response;

    }
    );
}

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

}
