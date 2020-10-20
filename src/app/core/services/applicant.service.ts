import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { APP_CONFIG, IAppConfig } from './app.config';
import { VoucherModel } from '../models/VoucherModel';
import { ApplicantModel } from '../models/ApplicantModel';
import { BaseModel } from '../models/BaseModel';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  Save(model: ApplicantModel): Observable<BaseModel>  {
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'Register/Save',model)
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  LoadPage(): Observable<ApplicantModel> {
    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Register/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

  Print(): Observable<ApplicantModel> {
    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Register/Print')
      .pipe(
        map((response: any) => {
          return response;
        }),
        
      );
  }

}
