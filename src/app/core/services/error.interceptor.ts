import {
    HttpEvent,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse,
    HttpInterceptor
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorIntercept implements HttpInterceptor {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // client-side error
                        errorMessage = `Error: ${error.error.message}`;
                    } else {
                        // server-side error
                        errorMessage = `Error Status: ${error.error.StatusCode}\nMessage: ${error.error.ErrorMessage}`;
                        // this.authService.logout(false);
                        // if (error.status == 500)
                        //     this.router.navigate(['/error']);
                        // else if (error.status == 401)
                        // {
                            
                        //     this.router.navigate(['/login/expire'])
                        // }
                        // else if (error.status == 403)
                        //     this.router.navigate(['/login/accessDenied'])
                        // else 
                        //     this.router.navigate(['/error'])
                        
                    }
                    console.log(error);
                    
                    return throwError(errorMessage);
                })
            )
    }
}