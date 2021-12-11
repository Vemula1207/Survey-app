import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Emailing } from '../model/Emailing';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailingService {
  localUrl = environment.localUrl+'/email-service';
  apiBaseUrl = environment.apiBaseUrl + '/email-service';

  private _url = "http://localhost:8050";

  constructor(private http: HttpClient) { }

  shareToEmails(emailing: Emailing): Observable<any>{
    console.log("Check",emailing);
    return this.http.post<any>(this._url+"/api/v1/sendmail", emailing, {responseType: 'text' as 'json'});
  }
}
