import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  private authorizeEndpoint = '/oauth2/authorization/google'
  private tokenEndpoint = '/login/oauth2/code/google';
  private baseUrl = environment.baseUrl;
  private tokenKey = 'token';
  private mailId='email';
  private paymentFlag=0;

  localUrl = environment.localUrl + '/user-service';
  apiBaseUrl = environment.apiBaseUrl + '/user-service';

  constructor(private http: HttpClient) {
  }

  login() {
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');


  }

  getUserInfo(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/v1/home');
  }

  updateAssessor(){
    return this.http.put(this.baseUrl + '/api/v1/register',localStorage.getItem("email"));
  }

  updateToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code, state): Observable<any> {
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token != null;
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  logout(): Observable<any> {
    return this.http.post(this.baseUrl + '/logout', this.getToken());
  }

  setPaymentFlag(){
    this.paymentFlag=1;
  }
  getPaymentFlag(){
    return this.paymentFlag;
  }
  
}
