import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Questions } from '../model/Questions';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class questionGroupServices {
  localUrl = environment.localUrl+'/surveyauthoring-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyauthoring-service';

  private _url = "http://localhost:8090";


  // for working with json-server
  //private _url3 = "http://localhost:3000/questions";
  
  constructor(private http : HttpClient) { }

  getQuestionGroup(): Observable<any> {
    return this.http.get<any>(this._url+"/api/v1/questiongroups")
                .pipe(catchError(this.errorHandler));
  }

  getQuestions(groupName):Observable<any>{
    console.log("here "+groupName);
    console.log(this._url +"/api/v1/questions/"+ groupName);
    return this.http.get<any>(this._url +"/api/v1/questions/"+ groupName)
                    .pipe(catchError(this.errorHandler));

  }

  //for working with json server
  // getQues():Observable<any>{
  //   console.log("here ");
  //   return this.http.get<any>(this._url3 )
  //                   .pipe(catchError(this.errorHandler));
  // }


  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
}
