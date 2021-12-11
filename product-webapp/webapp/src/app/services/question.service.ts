import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from '../model/Question';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  localUrl = environment.localUrl+'/surveyauthoring-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyauthoring-service';
  

  private _url = "http://localhost:8090";
  
  constructor(private http : HttpClient) { }

  addQuestion(question: Question): Observable<any> {
    return this.http.post<any>(this._url+"/api/v1/question", question);
                
  }
  updateQuestion(question: Question): Observable<any> {
    return this.http.put<any>(this._url+"/api/v1/question", question);
                
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'Something went wrong');
  }
 
}
