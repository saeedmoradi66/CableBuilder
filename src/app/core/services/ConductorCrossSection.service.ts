import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConductorCrossSection } from '../models/ConductorCrossSection';
import { CrossSectionPhase } from '../models/CrossSectionPhase';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorCrossSectionService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(CableBuilderNo:number): Observable<ConductorCrossSection> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorCrossSection/Get?id='+CableBuilderNo)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }
  Save(model: ConductorCrossSection): Observable<any> {

    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'ConductorCrossSection/Post', model)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
