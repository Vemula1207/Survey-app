import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { LoginServicesService } from './login-services.service';


@Injectable()
export class AuthHeaderInterceptorService implements HttpInterceptor {

  constructor(private securityService:LoginServicesService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const req = request.clone({
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json',
        Authorization: `Bearer ${this.securityService.getToken()}`,
      }
    });
    return next.handle(req);
  }
}