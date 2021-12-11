import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questions } from '../model/Questions';
import { MatDialog } from '@angular/material/dialog';
import { CreateQuestionDialogComponent } from '../create-question-dialog/create-question-dialog.component';
import { questionGroupServices } from '../services/questionGroupServices';
import { Question } from '../model/Question';
import * as moment from 'moment';
@Component({
  selector: 'app-display-questions-of-question-group',
  templateUrl: './display-questions-of-question-group.component.html',
  styleUrls: ['./display-questions-of-question-group.component.css']
})
export class DisplayQuestionsOfQuestionGroupComponent implements OnInit {
  public groupName : string; 
  public questions : any = [];
  public spinner : boolean = true;
  errormsg:string="";
  public totalLength :any ;
  public page : Number = 1;
  public time:any = "";
  // public myMoment: moment.Moment = moment("");
  constructor(private activatedRoute : ActivatedRoute,private service :questionGroupServices,private router :Router,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadQuestions();
  }

  show() {
    window.alert("hello there!");
  }
  openQuestionDialog(){
    let question = new Question();
    question.questionId="";
    question.createdBy = "";
    question.options = [];
    question.questionBody = "";
    question.tags = [];
    question.questionType = "";
    question.questionGroup = this.groupName;
    question.questionStatus = "";
    this.dialog.open(CreateQuestionDialogComponent, { height: '550px', width: '580px', data: { question } });
    this.loadQuestions();

  }

  formatDate(momentDate) {
    this.time = moment(momentDate);
    return this.time.fromNow();
  }

  loadQuestions(){
    this.groupName = this.activatedRoute.snapshot.paramMap.get('questiongroup');

    this.service.getQuestions(this.groupName)
      .subscribe(data => {
        this.questions = data;
        this.totalLength = this.questions.length;
        console.log(this.totalLength);
        if(data){
          this.spinner = false;
        }
        console.log("Questions Array", this.questions);
      },
        error => {
          console.log("Error in getting all ques", error);
        });

    console.log("group name ", this.groupName);
  }
  editQuestion(question)
  {
    let dialogRef=this.dialog.open(CreateQuestionDialogComponent, { height: '550px', width: '580px', data: { question } });
    this.loadQuestions(); }


}
