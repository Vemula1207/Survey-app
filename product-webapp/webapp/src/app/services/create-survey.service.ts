import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Survey } from '../model/Survey';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CreateSurveyService {

  localUrl = environment.localUrl+'/surveyauthoring-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyauthoring-service';

  private _url2 = "http://localhost:8090";
  private urlForPostingNewSurvey ="http://localhost:8090";

  constructor(private http: HttpClient) { }

  getQuestions(tags):Observable<any>{
    console.log("here "+tags);
    return this.http.get<any>(this._url2 +"/api/v1/questions/"+ tags)
                    .pipe(catchError(this.errorHandler));

  }

  sendSurveyDataToBackend(newSurvey: Survey):Observable<any>{
    return this.http.post<any>(this._url2+"/api/v1/survey",newSurvey)
              .pipe(catchError(this.errorHandler));
    
  }
  
  
  errorHandler(error: HttpErrorResponse) {
        return throwError(error.message || 'Something went wrong');
  }
  
}
