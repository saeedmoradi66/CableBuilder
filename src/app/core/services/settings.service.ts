import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { APP_CONFIG, IAppConfig } from './app.config';
import { SettingModel } from '../models/SettingModel';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) {}

  IsView(model: SettingModel): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'settings/IsView', model, {
        headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  IsDelete(model: SettingModel): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'settings/IsDelete', model, {
        headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  IsAdd(model: SettingModel): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'settings/IsAdd', model, {
        headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  IsEdit(model: SettingModel): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'settings/IsEdit', model, {
        headers,
      })
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  Get(model: SettingModel): Observable<SettingModel> {
   
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'settings/Get', model)
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }
}
