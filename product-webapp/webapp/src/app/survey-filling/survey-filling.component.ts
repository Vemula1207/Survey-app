import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray, Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiveSurvey } from '../model/ActiveSurvey';
import { Question } from '../model/Question';
import { Responses } from '../model/Responses';
import { RespQuestion } from '../model/RespQuestion';
import { UiSetting } from '../model/UiSetting';
import { SurveyFillingService } from '../services/survey-filling.service';
import { MatDialog } from '@angular/material/dialog';
import { SuccessfulSubmissionMessageComponent } from '../successful-submission-message/successful-submission-message.component';

@Component({
  selector: 'app-survey-filling',
  templateUrl: './survey-filling.component.html',
  styleUrls: ['./survey-filling.component.css']
})
export class SurveyFillingComponent implements OnInit {

  public uiSettings : UiSetting;
  public surveyId: any;
  public surveyTitle: String;
  public activeSurvey: ActiveSurvey;
  public user_response: Responses;
  public reso: RespQuestion[] = [];
  public questions: Question[] = [];
  public form: FormGroup;
  public sizeArray: Number = 0;
  errormsg: string = "";
  constructor(private fb: FormBuilder,private router:Router, private service: SurveyFillingService, private activatedRoute: ActivatedRoute,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.surveyId = this.activatedRoute.snapshot.paramMap.get('surveyid');
    this.surveyTitle = this.activatedRoute.snapshot.paramMap.get('title');
    console.log(this.surveyTitle);
    this.form = this.fb.group({
      something: this.fb.array([])
    });



    this.service.getData(this.surveyTitle,this.surveyId)
      .subscribe(data => {
        this.activeSurvey = data;
        this.questions = this.activeSurvey.question;
        this.sizeArray = this.questions.length;
        this.uiSettings = this.activeSurvey.uiSettings;
        console.log(this.activeSurvey);

        for (let x: any = 0; x < this.sizeArray; x++) {
          this.something.push(this.fb.control(''));
        }
      },
        error => {
          console.log("Error in getting all ques", error);
        });
  }


  get something() {
    return this.form.get('something') as FormArray;
  }

  get response() {
    console.log(this.form.get('responses') as FormArray);
    return this.form.get('response') as FormArray;
  }

  addmsq(id, opt: String, body: String, options) {
    console.log("Here us are", id, opt, body, options);
    for (let z = 0; z < this.reso.length; z++) {
      if (id == this.reso[z].questionId) {
        // flag = false;
        const index = this.reso[z].answers.indexOf(opt, 0);
        if (index > -1) {
          this.reso[z].answers.splice(index, 1);
        }
        else {
          this.reso[z].answers.push(opt);
        }
        console.log("here sssss", this.reso);
        return;
      }

    }

    let m = new RespQuestion;
    m.questionId = id;
    m.questionBody = body;
    m.options = options;
    let x: any = [];
    x.push(opt);
    m.answers = x;
    this.reso.push(m);
  }

  onSubmit() {
    var arrayControl = this.form.get('something') as FormArray;
    for (let x = 0; x < this.questions.length; x++) {

      if (this.questions[x].questionType != "MSQ") {

        let m = new RespQuestion;
        m.questionBody = this.questions[x].questionBody;
        m.options = this.questions[x].options;
        m.questionId=this.questions[x].questionId;
        let xmm: String[] = [];
        // console.log(this.form.controls[x].value);
        xmm.push(arrayControl.at(x).value);
        m.answers = xmm;
        this.reso.push(m);


        // console.log(arrayControl.at(0).value);
      }

    }

    console.log("OnSubmit call", this.reso);
    this.user_response = new Responses();
    this.user_response.surveyId = this.surveyId;
    this.user_response.questionResponseList = this.reso;
    this.service.postUserResponse(this.user_response).
      subscribe(data => {
        console.log('posted user-response', data);
      }, error => {
        console.log('error in posting user-response', error);
      });
    console.log("user-response",this.user_response);
    this.dialog.open(SuccessfulSubmissionMessageComponent, {
      height: '200px',
      width: '400px',
    });
    setTimeout(() => {
      // window.alert('Working fine');
      this.router.navigate['/login'];
    }, 3000);

  }

}


