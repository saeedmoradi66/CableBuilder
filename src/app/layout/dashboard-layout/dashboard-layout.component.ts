import { Component, OnInit } from '@angular/core';
import { AuthService, BrowserStorageService, GlobalService } from 'src/app/core';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private global: GlobalService, private authService: AuthService, private browserStorageService: BrowserStorageService) { }
  currentYear: number;
  userName: string;
  menuOpened: boolean = false;
  menuProfile: boolean = false;
  menuProfileMobile: boolean = false;
  menuRight: boolean = false;
  ngOnInit(): void {
    this.currentYear = (new Date()).getFullYear();

    this.global.FullName = this.userName = this.authService.getAuthUser().displayName;

  }


  logout() {
    this.browserStorageService.removeAllSessions();
    this.global.CableBuilderNo = 0;
    this.global.TempID = 0;
    this.authService.logout(true);

  }
}
