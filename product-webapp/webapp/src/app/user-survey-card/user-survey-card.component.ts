import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-survey-card',
  templateUrl: './user-survey-card.component.html',
  styleUrls: ['./user-survey-card.component.css']
})
export class UserSurveyCardComponent implements OnInit {

  @Input() public survey:any;
  public description:string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log("survey input : "+this.survey);
    this.description = this.survey.description;
  }
  fillSurvey(){
    this.router.navigate(['/fillsurvey',this.survey.surveyTitle,this.survey.activeSurveyId]);
    

  }

}
