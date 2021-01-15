import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Anneal } from '../models/Anneal';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class AnnealService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Anneal[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Anneal/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
