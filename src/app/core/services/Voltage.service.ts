import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CableTypeModel } from '../models/CableTypeModel';
import { VoltageModel } from '../models/VoltageModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class VoltageService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<VoltageModel[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Voltage/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  GetByCableType(id:number): Observable<VoltageModel[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Voltage/GetByCableType?id='+id)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
