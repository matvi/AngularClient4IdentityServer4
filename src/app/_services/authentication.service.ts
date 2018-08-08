import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// This Service is used for the login component, in order to use it go to http://localhost:4200/login
// This service is for user authentication using the IdentityServedr endpoint (connect/token)
// This flow uses the Resource Owner Password Credential Flow that exists only as OAuth2 for legacy reasons.
// This flow only returns an access token.
@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        const body = new HttpParams()
              .set('grant_type', 'password')
              .set('username', 'david')
              .set('password', '123')
              .set('client_id', 'ro.client')
              .set('client_secret', 'secret')
              .set('scope', 'api1');

    const queryHeaders = new HttpHeaders();
    queryHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

    console.log('Aqui');
    return this.http.post<any>('http://localhost:5000/connect/token', body, {
        headers: queryHeaders
      }).map((response: Response) => {
          localStorage.setItem('access_token_ROPC', JSON.stringify(response['access_token']));

          return response;
      });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('access_token_ROPC');
    }
}
