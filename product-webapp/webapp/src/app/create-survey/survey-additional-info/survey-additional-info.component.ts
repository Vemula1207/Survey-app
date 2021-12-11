import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Question } from 'src/app/model/Question';
import { Survey } from 'src/app/model/Survey';
import { LoginServicesService } from 'src/app/services/login-services.service';


@Component({
  selector: 'app-survey-additional-info',
  templateUrl: './survey-additional-info.component.html',
  styleUrls: ['./survey-additional-info.component.css']
})
export class SurveyAdditionalInfoComponent implements OnInit {

  @Output() emitSurvey = new EventEmitter<Survey>();
  @Output() emitFontSize = new EventEmitter<number>();
  @Output() emitFontFamily = new EventEmitter<string>();
  @Output() emitFontStyle = new EventEmitter<string>();
  @Input() surveyBasicDetailsFormGroup: FormGroup;
  @Input() questionsOfSurvey: Question[];

  newSurvey: Survey = new Survey();

  // data members
  public fontStyles = ["normal","italic","oblique"];
  public fontFamily = ["Times New Roman", "Arial", "Arial Black"];
  public fontSize = [8,10,12,14]

  // creating model
  additionalInformationOfSurveyFormGroup = new FormGroup({

    targetAudience: new FormControl(''),
    fontSize: new FormControl(''),
    fontFamily: new FormControl(''),
    fontStyle: new FormControl('')

  });

  constructor(private securityService: LoginServicesService) { }

  ngOnInit(): void {


  }

  setNewSurveyProperties(){
    let surveyBasicDetailsValue = this.surveyBasicDetailsFormGroup.value;
    let surveyAdditionalInfoValue = this.additionalInformationOfSurveyFormGroup.value;

    this.newSurvey.surveyTitle = surveyBasicDetailsValue.surveyName;
    this.newSurvey.activeTime = surveyBasicDetailsValue.duration;
    this.newSurvey.tags = surveyBasicDetailsValue.tags;
    this.newSurvey.description=surveyBasicDetailsValue.description;
    this.newSurvey.questions = this.questionsOfSurvey;
    this.newSurvey.targetAudience = surveyAdditionalInfoValue.targetAudience;
    this.newSurvey.uiSettings = {
      "fontSize": surveyAdditionalInfoValue.fontSize,
      "fontFamily": surveyAdditionalInfoValue.fontFamily,
      "fontStyle": surveyAdditionalInfoValue.fontStyle
    }

    console.log(localStorage.getItem("email"));
    this.newSurvey.createdBy=localStorage.getItem("email");
    this.newSurvey.surveyStatus = "DORMANT";
    this.newSurvey.type = "FLAT";
    this.newSurvey.createdOn = null;

    console.log(this.newSurvey)

    this.sendNewSurveyToParent();
  }

  sendNewSurveyToParent(){
    
    this.emitSurvey.emit(this.newSurvey);
    this.emitFontFamily.emit(this.additionalInformationOfSurveyFormGroup.value.fontSize);
    this.emitFontSize.emit(this.additionalInformationOfSurveyFormGroup.value.fontSize);
    this.emitFontStyle.emit(this.additionalInformationOfSurveyFormGroup.value.fontStyle)
  }

}
