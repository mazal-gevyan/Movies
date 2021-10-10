import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from '@environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }


  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>>{

    request = request.clone({
      url: `${environment.BASE_URL}${request.url}`
    });

    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (event.headers.get('JwtToken'))
            this.authService.setJwtToken(event.headers.get('JwtToken'));
        }
      }),
      catchError(this.handleError.bind(this))
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      if (error.status === 401) {
        console.log(`${error.status} Unauthorized server error`);
        this.authService.logout();
        this.router.navigateByUrl("/auth/login");
      } else {
        console.error(
          `Backend returned code ${error.status}, body was: ${JSON.stringify(
            error.error
          )}`
        );
        this.router.navigateByUrl("/page404");
      }
    }
  }


}