import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APP_CONFIG, IAppConfig } from './app.config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApplicantModel } from '../models/ApplicantModel';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  getImage(): any {
    return this.http.get(
      `${this.appConfig.apiEndpoint}/` + 'dashboard/GetImage'
    );
  }

  GetUserInfo(): Observable<any> {
    return this.http
      .get<any>(
        `${this.appConfig.apiEndpoint}/` + 'Dashboard/GetUserInfo'
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  GetMenu(): Observable<ApplicantModel> {
    return this.http
      .get<ApplicantModel>(
        `${this.appConfig.apiEndpoint}/` + 'Dashboard/GetMenu'
      )
      .pipe(
        map((res) => {
          return res;
        })
      );
  }
}
