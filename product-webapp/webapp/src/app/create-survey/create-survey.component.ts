import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import { Question } from '../model/Question';
import { Survey } from '../model/Survey';
import { CreateSurveyService } from '../services/create-survey.service';
import { LoginServicesService } from '../services/login-services.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  newSurvey: Survey = new Survey();
  fontFamily: string = "Times New Roman";
  fontSize: number = 12;
  fontStyle: string = "normal";

  public surveyBasicDetailsFormGroup: FormGroup = new FormGroup({
    surveyName : new FormControl(''),
    description : new FormControl(''),
    tags : new FormControl([]),
    duration : new FormControl('')
  });

  public questionsOfSurvey: Question[];
  
  constructor( private service: CreateSurveyService, private logInService: LoginServicesService) {
    this.surveyBasicDetailsFormGroup.value.tags = [];
  }

  ngOnInit(): void {

  }

  setSurveyBasicDetailsFormGroup(surveyBasicDetailsFormGroupFromChild: FormGroup){
    console.log(surveyBasicDetailsFormGroupFromChild.value)
    this.surveyBasicDetailsFormGroup = surveyBasicDetailsFormGroupFromChild;
  }

  setQuestionsOfSurvey(questionsFromChild: Question[]){
    console.log(questionsFromChild);
    this.questionsOfSurvey = questionsFromChild;
  }

  setNewSurveyProperties(newSurveyFromChild: Survey){

    this.newSurvey = newSurveyFromChild;

  }

  setFontFamily(fontFamilyFromChild: string){
    this.fontFamily = fontFamilyFromChild;
  }

  setFontStyle(fontStyleFromChild: string){
    this.fontStyle = fontStyleFromChild;
  }

  setFontSize(fontSizeFromChild: number){
    this.fontSize=fontSizeFromChild;
  }

}
