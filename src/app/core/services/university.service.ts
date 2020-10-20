import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UniversityModel } from '../models/universityModel';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(
    private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig
  ) { }

  public Search(page:number,keyword:string): Observable<any> {
    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'search/SearchUniversity?page='+page+'&keyword=' + keyword)
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
