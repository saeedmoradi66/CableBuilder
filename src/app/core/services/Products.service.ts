import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Products } from '../models/Products';
import { APP_CONFIG, IAppConfig } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,

    @Inject(APP_CONFIG) private appConfig: IAppConfig) { }

  Get(): Observable<Products[]> {

    return this.http
      .get(`${this.appConfig.apiEndpoint}/` + 'Products/Get')
      .pipe(
        map((response: any) => {
          return response;
        }),

      );
  }


}
