import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WireDiameter } from '../models/WireDiameter';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class WireDiameterService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<WireDiameter[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'WireDiameter/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
