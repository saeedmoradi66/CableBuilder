import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CableTypeModel } from '../models/CableTypeModel';
import { StandardModel } from '../models/StandardModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class StandardService {
  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<StandardModel[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Standard/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
