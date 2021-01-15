import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorOperation } from '../models/ConductorOperation';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorOperationService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(cableBuilderNo: number, tempID: number): Observable<ConductorOperation> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorOperation/Get?cableBuilderNo=' + cableBuilderNo + '&tempID=' + tempID)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
  GetDrawing(cableBuilderNo: number, tempID: number): Observable<ConductorOperation> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorOperation/GetDrawing?cableBuilderNo=' + cableBuilderNo + '&tempID=' + tempID)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
  
 

}
