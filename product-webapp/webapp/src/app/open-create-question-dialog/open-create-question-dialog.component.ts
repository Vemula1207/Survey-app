import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateQuestionDialogComponent } from '../create-question-dialog/create-question-dialog.component';
import { Question } from '../model/Question';

@Component({
  selector: 'app-open-create-question-dialog',
  templateUrl: './open-create-question-dialog.component.html',
  styleUrls: ['./open-create-question-dialog.component.css']
})
export class OpenCreateQuestionDialogComponent implements OnInit {
  questions: Question[] = [];
  static question:Question=new Question();
  options:[];
  constructor(public dialog: MatDialog, public http: HttpClient) {
    
    this.http.get<any>("http://localhost:3000/questions").subscribe(data => {
      this.questions = data;
    },error=>{
      console.log(error)
    }) 
 

  }
  openDialog() {
    let question = new Question();
    question.createdBy = "";
    question.options = [];
    question.questionBody = "";
    question.tags = [];
    question.questionType = "";
    question.questionGroup = "";
    question.questionStatus = "";
    this.dialog.open(CreateQuestionDialogComponent, { height: '550px', width: '580px', data: { question } });

  }

  ngOnInit(): void {
 
  }
  onEdit(question) {
     
  
    let dialogRef=this.dialog.open(CreateQuestionDialogComponent, { height: '550px', width: '580px', data: { question } });
   /*this.http.get<any>("http://localhost:3000/questions").subscribe(data => {
      this.questions = data;
    },error=>{
      console.log(error)
    })*/
    
  }

}
