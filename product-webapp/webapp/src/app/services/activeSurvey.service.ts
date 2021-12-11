import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoginServicesService } from "./login-services.service";
import { environment } from 'src/environments/environment';
import { ResponseAnalysis } from "../model/response-analysis";

@Injectable({
  providedIn: "root",
})
export class ActiveSurveyService {
  localUrl = environment.localUrl+'/surveyengine-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyengine-service';

  private mock_url = "http://localhost:3000/surveylist";
  private url = "http://localhost:8095";
  private url2 = "http://localhost:8095/api/v1/activesurveys";
  private userEmailId: string;
  constructor(
    private http: HttpClient,
    private securityService: LoginServicesService
  ) {}

  getActiveSurveyDetails(): Observable<any> {
    this.userEmailId = localStorage.getItem("email");
    return this.http
      .get<any>(this.url + "/api/v1/activesurvey/" + this.userEmailId)
      .pipe(catchError(this.errorHandler));
     
      // To get survey from json
      /*return this.http
      .get<any>("http://localhost:3000/surveylist")
      .pipe(catchError(this.errorHandler));*/

  }

  // getActiveSurveyDetails(): Observable<any> {
  //   this.userEmailId = this.securityService.getEmailId();
  //   return this.http
  //     .get<any>(this.mock_url)
  //     .pipe(catchError(this.errorHandler));
  // }

  getAllActiveSurveys(): Observable<any> {
    return this.http.get<any>(this.url+"/api/v1/activesurveys").pipe(catchError(this.errorHandler));
  }

  // getAllActiveSurveys(): Observable<any> {
  //   return this.http.get<any>(this.mock_url).pipe(catchError(this.errorHandler));
  // }

  postSurveyDetail(Survey): Observable<any> {
    return this.http
      .post<any>(this.url+"/api/v1/activeSurvey", Survey)
      .pipe(catchError(this.errorHandler));
  }

  getResponse(surveyId:string): Observable<any> {
    return this.http.get<ResponseAnalysis[]>(this.url+"/api/v1/responses/"+surveyId)
                .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Something went wrong");
  }
}
