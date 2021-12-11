import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionGroup } from '../model/QuestionGroup';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreateQuesGroupService {

  localUrl = environment.localUrl+'/surveyauthoring-service';
  apiBaseUrl = environment.apiBaseUrl + '/surveyauthoring-service';

  private _url = "http://localhost:8090";
  
  constructor(private http : HttpClient) { }

  addQuesGroup(question: QuestionGroup): Observable<any> {
    return this.http.post<any>(this._url+"/api/v1/questiongroup", question);
                
  }
}
