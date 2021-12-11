import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  localUrl = environment.localUrl + '/payment-service';
  apiBaseUrl = environment.apiBaseUrl + '/payment-service';
  
  url= 'http://localhost:9093';

  constructor(private http: HttpClient) {
  }

  paymentForAssessor(token){
    const headers =new HttpHeaders({'token': token, 'amount': '1000'});
    return this.http.post(this.url+'/payment/charge', '{}', {headers: headers});
  }

  public errorHandler(error: Response | any) {
    if (error instanceof ErrorEvent) {
      console.error("An error occured", error.message);
      return throwError("Something bad happenend");
    }
    else {
      console.error(`Backend returned code ${error.status}` +
        `body was: ${error.message}`);
      return throwError(error);
    }
  }
}
