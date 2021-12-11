import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ActiveSurvey } from "../model/ActiveSurvey";
import { Survey } from "../model/Survey";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root",
})
export class SurveyListingService {
  
  private mock_url = "http://localhost:3000/surveylist";
  private post_url = "http://localhost:8095/api/v1/activeSurvey";
  localUrl = environment.localUrl+'/surveyauthoring-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyauthoring-service';

  private get_url = "http://localhost:8090";
  constructor(private http: HttpClient) {}

  getSurveyDetails(): Observable<any> {
    return this.http.get<any>(this.get_url+"/api/v1/surveys/"+localStorage.getItem("email")).pipe(catchError(this.errorHandler));
  }

  // getSurveyDetails(): Observable<any> {
  //   return this.http.get<any>(this.mock_url).pipe(catchError(this.errorHandler));
  // }

  postSurveyDetail(survey:ActiveSurvey): Observable<any> {
    return this.http
      .post<ActiveSurvey>(this.post_url, survey)
      .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Something went wrong");
  }
}
