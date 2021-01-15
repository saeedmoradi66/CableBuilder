import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dashboard } from '../models/Dashboard';
import { APP_CONFIG, IAppConfig } from './app.config';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(id: number): Observable<Dashboard> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'dashboard/Get?id=' + id)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
