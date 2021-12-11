import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  localUrl = environment.localUrl + '/user-service';
  apiBaseUrl = environment.apiBaseUrl + '/user-service';

 
  constructor(private http: HttpClient) { }
  putDetails(us:User)
  {
    return this.http.post<User>("url",us)
  }
}
