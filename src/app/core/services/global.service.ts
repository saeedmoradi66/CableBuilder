import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public CableBuilderNo: number = 0;
  public TempID: number = 0;
  constructor() { }
  public FullName: string = '';
  
}
