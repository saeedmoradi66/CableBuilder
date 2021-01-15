import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GeneralModel } from '../models/GeneralModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  Search(model: GeneralModel): Observable<GeneralModel[]>{
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'General/Search', model)
      .pipe(
        map((response: GeneralModel[]) => {
          return response;
        }),

      );
  }

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(id:number,tempID:number): Observable<GeneralModel> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'General/Get?id='+id+'&tempID='+tempID)
      .pipe(
        map((response: GeneralModel) => {
          return response;
        }),

      );
  }

  Save(model:GeneralModel): Observable<any> {

    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'General/Post',model)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
