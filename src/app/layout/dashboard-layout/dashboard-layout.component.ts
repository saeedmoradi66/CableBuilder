import { Component, OnInit } from '@angular/core';
import { AuthService, GlobalService } from 'src/app/core';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private global: GlobalService, private authService: AuthService) { }
  currentYear: number;
  userName: string;
  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear();
    
    this.global.FullName = this.userName = this.authService.getAuthUser().displayName;
  }


  logout() {
    this.authService.logout(true);
  }
}
