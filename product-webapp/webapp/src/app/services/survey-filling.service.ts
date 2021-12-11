import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Questions } from '../model/Questions';

@Injectable({
  providedIn: 'root'
})
export class SurveyFillingService {
  private _url1 = "http://localhost:8095/api/v1/activesurvey/";
  private _url2 = "http://localhost:8095/api/v1/response";
  private mock_url = "http://localhost:3000/surveyData";

  constructor(private http : HttpClient) { }

  getData(surveyTitle, surveyId):Observable<any>{
    return this.http.get<any>(this._url1+surveyTitle+"/"+surveyId)
                    .pipe(catchError(this.errorHandler));
  }

  postUserResponse(user_response):Observable<any>{
    console.log("user response",user_response);
    return this.http.post<any>(this._url2,user_response)
                     .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
}
