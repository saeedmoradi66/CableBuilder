import { Component, OnInit } from '@angular/core';
import { DashboardService, GlobalService } from 'src/app/core';
import { Dashboard } from 'src/app/core/models/Dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model: Dashboard;
  constructor(private dashboardService: DashboardService, private _gloablService: GlobalService) { }

  ngOnInit(): void {
    if (this._gloablService.CableBuilderNo > 0) {
      this.Get(this._gloablService.CableBuilderNo);
    }
    else {
      this.model = new Dashboard();
    }
    console.log(this.model);
  }

  Get(id: number) {
    this.model = new Dashboard();
    this.model.cableBuilderNo = id;
    this.dashboardService.Get(this.model)
      .subscribe(response => {
        this.model = response;
        
      }
      );
  }

}
