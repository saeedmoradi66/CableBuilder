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
  
  Get(model: Dashboard): Observable<Dashboard> {
    
    return this.http
      .post(`${this.appConfig.apiEndpoint}/` + 'dashboard/Get', model)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }

}
