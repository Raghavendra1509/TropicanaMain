import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from './../security/authentication.service';
import { LoaderService } from './../loader.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  private count = 0;
  constructor(private authenticationService: AuthenticationService, private loaderService: LoaderService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const responseType = request.responseType || 'json';
    const apiToken = localStorage.getItem('Authorization');
    let currentUser = this.authenticationService.currentUserValue;

    if (this.count === 0) {
      this.loaderService.setHttpProgressStatus(true);
    }
    this.count++;

    if (currentUser && apiToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      });
    }

    // add authorization header with jwt token if available
    //let currentUser = this.authenticationService.currentUserValue;
    //if (currentUser && currentUser.token) {
    //  request = request.clone({
    //    setHeaders: {
    //      Authorization: `Bearer ${currentUser.token}`
    //    }
    //  });
    //}

    return next.handle(request).pipe(
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.loaderService.setHttpProgressStatus(false);
        }
      }));
  }
}
