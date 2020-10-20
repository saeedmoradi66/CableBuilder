import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  public errorMessage: string = '';

  constructor(private router: Router) {}

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    } else {
      this.handleOtherError(error);
    }
  };

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    //this.router.navigate(['/error']);
  };

  private handleOtherError = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
      this.router.navigate(['error']);
    //TODO: this will be fixed later;
  };

  private createErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  };
}
