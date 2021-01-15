import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Conductors } from '../models/Conductors';
import { CrossSection } from '../models/CrossSection';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ConductorsService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(cableBuilderNo: number, tempID: number): Observable<Conductors> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Conductors/Get?cableBuilderNo=' + cableBuilderNo + '&tempID=' + tempID)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  Save(model: Conductors): Observable<Conductors> {

    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'Conductors/Post', model)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  FillCrossSection(classID: number,compactionID:number,materialID:number): Observable<CrossSection[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorBase/FillCrossSection?classID=' + classID + '&compactionID=' + compactionID +'&materialID='+materialID)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

  Search(classID: number, crossSectionID: number, materialID: number,compactionID :number): Observable<Conductors> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'ConductorBase/Search?classID=' + classID + '&crossSectionID=' + crossSectionID + '&materialID=' + materialID + '&compaction=' + compactionID)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
