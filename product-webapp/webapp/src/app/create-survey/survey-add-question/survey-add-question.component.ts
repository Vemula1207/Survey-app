import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Question } from 'src/app/model/Question';
import { CreateSurveyService } from 'src/app/services/create-survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey-add-question',
  templateUrl: './survey-add-question.component.html',
  styleUrls: ['./survey-add-question.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class SurveyAddQuestionComponent implements OnInit {

  @Output() emitQuestionsArray = new EventEmitter<Question[]>();
  @Input() surveyTags: string[];

  public spinner: boolean = true;
  public noQuestionsAvaliableAccordingToTag: boolean = false;
  public questionsAvaliable: boolean = false;
  public surveyQuestions: Question[] = [];
  public alreadyAddedQuestion: Question[] = [];
  public isAnyQuestionSelected = false;
  public errorMsg: string;
  // public groupName ="Customer"; //To be customized later
  public totalFetchedQuestion: number;
  public pageNumberForAddQuestionPage: number = 1;
  public totalAddedQuestions: number;
  public pageNumberForSelectedQuestions: number = 1;
  public warningForLessQuestionsSelected: boolean = true;
  public disableNextButton: boolean = true;

  constructor(private service: CreateSurveyService, private route: Router) {

  }

  ngOnChanges(changes: SimpleChanges){

    console.log(changes.surveyTags.currentValue );
    console.log("1");

    
      this.service.getQuestions(changes.surveyTags.currentValue.toString())
        .subscribe(data => {
          this.surveyQuestions=data;
          // if(data){
          //   this.spinner=false;
          //   this.noQuestionsAvaliableAccordingToTag=false;
          //   this.questionsAvaliable=true;
          //   this.surveyQuestions = data;
          //   this.totalFetchedQuestion = this.surveyQuestions.length;
          // }else{
          //   this.noQuestionsAvaliableAccordingToTag = true;
          //   this.spinner=false;
          //   this.questionsAvaliable=false;
          // }

          if((this.surveyTags.length==0)||(this.surveyTags.length>0&&this.surveyQuestions.length==0)){
            this.noQuestionsAvaliableAccordingToTag=true;
            this.spinner=false;
            this.questionsAvaliable=false;
          }else if(this.surveyTags.length>0&&this.surveyQuestions.length>0){
            this.spinner=false;
            this.noQuestionsAvaliableAccordingToTag=false;
            this.questionsAvaliable=true;
            this.totalFetchedQuestion = this.surveyQuestions.length;
          }

        },(error) => {
          this.errorMsg = error
          this.spinner=true;
          this.noQuestionsAvaliableAccordingToTag=false;
          this.questionsAvaliable=false;
        }
      );

  }

  ngOnInit(): void {

    
  }

  onClickAddQuestionToSelectedQuestion = ($event) => {

    if(event.target['checked']===false){
      return;
    }
    
    const currentQuestionId =  event.target['value'] ;

    let currentQuestionIndex = -1;

    const currentQuestion = this.surveyQuestions.filter( question => question.questionId == currentQuestionId );

    // finding the index of currentQuestion in alreadyAddedQuestion Array
    this.alreadyAddedQuestion.find( (question, index) => {

      if ( question.questionId === currentQuestionId ){

        currentQuestionIndex = index;
        return true;

      }

      return false;

    });

    if ( currentQuestionIndex >= 0 ){

      // For removing question when author unchecks the selected question
      this.alreadyAddedQuestion.splice( currentQuestionIndex, currentQuestionIndex + 1 );

    }else{

      // For adding a question to survey when author checks the selected question
      this.alreadyAddedQuestion.push(currentQuestion[0]);

    }

    this.totalAddedQuestions = this.alreadyAddedQuestion.length;

    if(this.totalAddedQuestions>=5){
      this.warningForLessQuestionsSelected=false;
      this.disableNextButton=false;
    }

  }

  sendAlreadyAddedQuestionToParent(){
    console.log(this.alreadyAddedQuestion)
      this.emitQuestionsArray.emit(this.alreadyAddedQuestion);
  }

  removeAlreadyAddedQuestion(currentQuestion:Question){

    const currentQuestionId =  currentQuestion.questionId;

    let currentQuestionIndex = -1;

    // finding the index of currentQuestion in alreadyAddedQuestion Array
    this.alreadyAddedQuestion.find( (question, index) => {
      if ( question.questionId === currentQuestionId ){
        currentQuestionIndex = index;
        return true;
      }
      return false;
    });

    // For removing question when author unchecks the selected question
    this.alreadyAddedQuestion.splice( currentQuestionIndex, currentQuestionIndex + 1 );
    console.log(this.alreadyAddedQuestion)

  }

  redirectToQuestionGroupComponent(){

    this.route.navigate(['/sidenav/displaygroups'])

  }

}
