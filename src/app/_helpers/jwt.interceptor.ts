import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    // After the toekn is set, all request are going to have the Authorization header.

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            const currentUser = JSON.parse(localStorage.getItem('access_token_ROPC'));
            const access_token = localStorage.getItem('access_token');
            if (access_token) {
                request = request.clone({
                headers: new HttpHeaders()
                                          .append('Content-Type',  'application/x-www-form-urlencoded')
                                          .append('Authorization', `Bearer ${access_token}`)
                                          .append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT')
            });
        }
        return next.handle(request);
    }
}
