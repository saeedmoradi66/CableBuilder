import { Component, OnInit } from '@angular/core';
import { DashboardService, GlobalService } from 'src/app/core';
import { Dashboard } from 'src/app/core/models/Dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: Dashboard = new Dashboard();
  constructor(private dashboardService: DashboardService, private _gloablService: GlobalService) { }
  cableBuilderNo: number;
  ngOnInit(): void {
    
    if (this._gloablService.CableBuilderNo > 0) {
      this.Get(this._gloablService.CableBuilderNo);
    }
    this.cableBuilderNo = this._gloablService.CableBuilderNo;

  }

  Get(id: number) {

    this.dashboardService.Get(id)
      .subscribe(response => {
      
        this.model = response;
       
      }
      );
  }

}
