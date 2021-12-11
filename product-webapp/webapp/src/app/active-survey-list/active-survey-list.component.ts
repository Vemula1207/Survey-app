import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyListingService } from '../services/surveyListing.service';
import { CreateSurveyService } from '../services/create-survey.service';
import { ActiveSurveyService } from "../services/activeSurvey.service";

@Component({
  selector: "app-active-survey-list",
  templateUrl: "./active-survey-list.component.html",
  styleUrls: ["./active-survey-list.component.css"],
})
export class ActiveSurveyListComponent implements OnInit {

  public surveys : any = [];
  errormsg:string="";
  constructor(private service: ActiveSurveyService, private router: Router) {}
  // constructor() { }
  ngOnInit(): void {
    this.service.getActiveSurveyDetails().subscribe(
      (data) => {
        this.surveys = data;
        console.log("At"+this.surveys);
      },
      (error) => {(this.errormsg = error);
      console.log(error);
      }
    );
  }
}
