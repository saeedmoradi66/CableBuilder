import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CrossSection } from '../models/CrossSection';
import { CrossSectionEarth } from '../models/CrossSectionEarth';
import { CrossSectionNull } from '../models/CrossSectionNull';
import { CrossSectionPhase } from '../models/CrossSectionPhase';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class CrossSectionService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  GetPhase(): Observable<CrossSectionPhase[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'CrossSection/GetPhase')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetNull(): Observable<CrossSectionNull[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'CrossSection/GetNull')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetEarth(): Observable<CrossSectionEarth[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'CrossSection/GetEarth')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  Get(): Observable<CrossSection[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'CrossSection/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
