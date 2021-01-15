import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { APP_CONFIG, GlobalService, IAppConfig } from 'src/app/core';
import { CableTypeModel } from 'src/app/core/models/CableTypeModel';
import { Dashboard } from 'src/app/core/models/Dashboard';
import { GeneralModel } from 'src/app/core/models/GeneralModel';
import { StandardModel } from 'src/app/core/models/StandardModel';
import { VoltageModel } from 'src/app/core/models/VoltageModel';
import { CableTypeService } from 'src/app/core/services/CableType.service';
import { GeneralService } from 'src/app/core/services/General.service';
import { StandardService } from 'src/app/core/services/Standard.service';
import { VoltageService } from 'src/app/core/services/Voltage.service';





@Component({
  selector: 'app-continue-design',
  templateUrl: './continue-design.component.html',
  styleUrls: ['./continue-design.component.css']
})
export class ContinueDesignComponent implements OnInit {

  displayedColumns: string[] = ['cableBuilderNo', 'title', 'standardTitle', 'voltageTitle', 'Continue'];
  dataSource: MatTableDataSource<GeneralModel>;
  //standardList: StandardModel[];
  voltageList: VoltageModel[];
  cableTypeList: CableTypeModel[];
  isSuccess: boolean = false;
  errorMessages: string = '';
  isLoading: boolean = false;
  model: GeneralModel;
  list: GeneralModel[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  form1 = this.fb.group({
    cableType: [''],
   // standard: [''],
    voltage: [''],
    cableBuilderNo: ['']
  });
  constructor(private generalService: GeneralService, private fb: FormBuilder, @Inject(APP_CONFIG) private appConfig: IAppConfig, private standardService: StandardService,
    private voltageService: VoltageService,
    private cableTypeService: CableTypeService, private _gloablService: GlobalService, private router: Router) {


  }
  ngOnInit(): void {
    //this.GetStandard();
    this.GetCableType();
    this.GetVoltage();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
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

  submitForm() {
    this.model = new GeneralModel();
    // if (this.form1.value.standard != '')
    //   this.model.standardID = parseInt(this.form1.value.standard);
    if (this.form1.value.voltage != '')
      this.model.voltageID = parseInt(this.form1.value.voltage);
    if (this.form1.value.cableType != '')
      this.model.cableTypeID = parseInt(this.form1.value.cableType);
    if (this.form1.value.cableBuilderNo != '')
      this.model.cableBuilderNo = parseInt(this.form1.value.cableBuilderNo);
    this.isLoading = true;
    this.isSuccess = false;
    this.generalService.Search(this.model)
      .subscribe(response => {
        this.isSuccess = true;
        this.list = response;
        console.log(this.list);
        this.dataSource = new MatTableDataSource(this.list);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      );


    this.isLoading = false;
  }

  getRecord(name) {
    this._gloablService.CableBuilderNo = name;
    this.router.navigateByUrl("/dashboard/home");
  }

}

