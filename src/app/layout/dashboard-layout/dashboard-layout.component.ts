import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/core';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
 
  constructor(private global: GlobalService) { }

  ngOnInit(): void {
    this.global.loadScript();
  }

}
