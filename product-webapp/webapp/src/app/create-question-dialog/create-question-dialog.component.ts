import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuestionService } from '../services/question.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

import { Question } from '../model/Question';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-question-dialog',
  templateUrl: './create-question-dialog.component.html',
  styleUrls: ['./create-question-dialog.component.css']
})
export class CreateQuestionDialogComponent implements OnInit {
  questionObject: Question = new Question();
  updatedQuestionObject:Question=new Question();
  public questionId="";
  public questionType = "";
  private options: string[] = [];
  public createdBy = "";
  public questionBody = "";
  public questionGroup = "";
  public questionStatus = "";
  public tags: string[] = [];




  public option = "";
  public notSaved = true;
  public optionShow=[];
  public forEdit=false;


  constructor(private snackBar: MatSnackBar, private questionService: QuestionService, public dialogRef: MatDialogRef<CreateQuestionDialogComponent>,
    @Inject(MAT_DIALOG_DATA)private data: any) {
      
    this.questionBody = data.question.questionBody;
    this.questionType = data.question.questionType;
    this.questionId=data.question.questionId;
    this.tags = data.question.tags;
    this.options = data.question.options;
    this.questionGroup = data.question.questionGroup;
    this.questionStatus = data.question.questionStatus;
    this.createdBy = data.question.createdBy;
    if(this.questionBody.length>0)
    {
      this.forEdit=true;
    }
 


  }

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;


  ngOnInit(): void {
    
    
  }
  // FOR ADDING OPTIONS
  addOption() {
    for (var index in this.options) {
      if (this.options[index] == this.option) {
        this.snackBar.open("Option already exist", "Dismiss")
        return
      }

    }

    if (this.option.length == 0) {
      this.snackBar.open("Option Can't be empty", "Dismiss")
    }
    else if (this.options.length >= 4) {
      this.snackBar.open("Maximum 4 options are allowed", "Dismiss")
    }
    else {
      this.options.push(this.option);
      this.option = "";

    }

  }

  //FOR DELETING OPTIONS
  onDelete(x: number) {
    this.options.splice(x, 1);
  }
  //FOR SAVING QUESTION
  onSave() {
    if (this.questionType == "MCQ" || this.questionType == "MSQ") {
      if (this.options.length <= 1) {
        this.snackBar.open("Atleast 2 options are required", "Dismiss")
        return
      }
    }
    if (this.questionBody.length == 0) {
      this.snackBar.open("Question cant be empty", "Dismiss")
      return

    }
    if (this.questionType.length == 0) {
      this.snackBar.open("Please select question type", "Dismiss")
      return
    }
    else {
      if(this.questionType=="SUBJECTIVE")
      {
        this.options=[];
      }
      this.questionObject.questionId=this.questionId;
      this.questionObject.questionBody = this.questionBody;
      this.questionObject.questionType = this.questionType;
      this.questionObject.options = this.options;
      this.questionObject.createdBy = this.createdBy;
      this.questionObject.questionGroup = this.questionGroup;
      this.questionObject.questionStatus = "FREE";
      this.questionObject.tags = this.tags;


      this.questionService.addQuestion(this.questionObject).subscribe(data => {
        console.log('question created', data);
      }, error => {
        console.log('error in creating question', error);
      });
      console.log(this.questionObject)
      this.notSaved = false;
    }
    console.log("here is questiongroup",this.questionGroup)
  }

  editQuestion()
  {
    if (this.questionType == "MCQ" || this.questionType == "MSQ") {
      if (this.options.length <= 1) {
        this.snackBar.open("Atleast 2 options are required", "Dismiss")
        return
      }
    }
    if (this.questionBody.length == 0) {
      this.snackBar.open("Question cant be empty", "Dismiss")
      return

    }
    if (this.questionType.length == 0) {
      this.snackBar.open("Please select question type", "Dismiss")
      return
    }
    else {
      if(this.questionType=="SUBJECTIVE")
      {
        this.options=[];
      }
      this.updatedQuestionObject.questionId=this.questionId;
      this.updatedQuestionObject.questionBody = this.questionBody;
      this.updatedQuestionObject.questionType = this.questionType;
      this.updatedQuestionObject.options = this.options;
      this.updatedQuestionObject.createdBy = this.createdBy;
      this.updatedQuestionObject.questionGroup = this.questionGroup;
      this.updatedQuestionObject.questionStatus = this.questionStatus;
      this.updatedQuestionObject.tags = this.tags;


      this.questionService.updateQuestion(this.updatedQuestionObject).subscribe(data => {
        console.log('question edited', data);
      }, error => {
        console.log('error in editing question', this.updatedQuestionObject);
      });
   
      this.notSaved = false;
    }

    location.reload();
  }
  //FOR ADDING TAGS
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push(value);
    }
    if (event.input) {
      event.input.value = '';
    }
  }

  //FOR REMOVING TAGS
  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }



}
