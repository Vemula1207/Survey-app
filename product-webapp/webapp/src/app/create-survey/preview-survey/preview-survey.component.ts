import { Component, Input, OnInit } from '@angular/core';
import { Survey } from 'src/app/model/Survey';
import { CreateSurveyService } from 'src/app/services/create-survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-survey',
  templateUrl: './preview-survey.component.html',
  styleUrls: ['./preview-survey.component.css']
})
export class PreviewSurveyComponent implements OnInit {

  @Input() newSurvey: Survey;
  @Input() fontFamily: string;
  @Input() fontStyle: string;
  @Input() fontSize: string;

  constructor( private createSurveyService: CreateSurveyService, private route:Router ) { }

  ngOnInit(): void {

  }

  createNewSurvey(){

    this.createSurveyService.sendSurveyDataToBackend(this.newSurvey)
        .subscribe(data => {
          console.log(data)
    },error => {
      console.log('error in creating question group',error);
    },
    ()=>{
      this.route.navigate(['/sidenav/surveylist']);

    }
    );
    
  }

}
