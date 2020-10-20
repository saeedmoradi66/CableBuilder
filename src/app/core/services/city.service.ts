import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CityModel } from '../models/CityModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }
  

  GetCity(cityModel: CityModel): Observable<CityModel[]> {
    return this.http
      .post<CityModel[]>(
        `${this.appConfig.apiEndpoint}/` + 'Register/GetCity', cityModel
      )
      .pipe(
        map((response: CityModel[]) => {
          return response;
        })
        
      );
  }

}
