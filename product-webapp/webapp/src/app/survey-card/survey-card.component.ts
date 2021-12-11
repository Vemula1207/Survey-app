import { Component, Input, OnInit } from '@angular/core';
import { ActiveSurvey } from '../model/ActiveSurvey';
import { SurveyListingService } from '../services/surveyListing.service';
import { ActiveSurveyService } from '../services/activeSurvey.service';
import * as moment from 'moment';

@Component({
  selector: 'app-survey-card',
  templateUrl: './survey-card.component.html',
  styleUrls: ['./survey-card.component.css']
})
export class SurveyCardComponent implements OnInit {
  @Input() public survey:any;
  public myModel = false;
  public activeSurvey:ActiveSurvey = new ActiveSurvey();
  public description:string;
  public audience:string = "";
  public time:any = "Active Time: ";
  constructor(private service:ActiveSurveyService) { }

  ngOnInit(): void {
    console.log("survey status: "+this.survey.surveyStatus);
    this.description = this.survey.description;
    this.audience += this.survey.targetAudience;
    this.time += this.survey.activeTime + " mins";
    if(this.survey.surveyStatus == "ACTIVE")
    this.myModel=true;
    else this.myModel=false;

  }
  formatDate(momentDate) {
    this.time = moment(momentDate);
    return this.time.fromNow();
  }

  activateSurvey(){
  console.log(this.survey.surveyStatus);
  this.survey.surveyStatus="ACTIVE"
  console.log(this.survey);
  this.activeSurvey.surveyTitle = this.survey.surveyTitle;
  this.activeSurvey.description = this.survey.description;
  this.activeSurvey.createdBy = this.survey.createdBy;
  this.activeSurvey.status = this.survey.surveyStatus;
  this.activeSurvey.activeTime = this.survey.activeTime;
  this.activeSurvey.question = this.survey.questions;
  this.activeSurvey.uiSettings = this.survey.uiSettings;
  this.activeSurvey.activatedOn = this.survey.createdOn;
  this.activeSurvey.targetAudience = this.survey.targetAudience;
  this.service.postSurveyDetail(this.activeSurvey).subscribe(data =>{
    console.log('Survey Activated',data);
  } , error => {
    console.log('error in activating',error);
  });
  }
}
