import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { EmailingComponent } from "../emailing/emailing.component";
import * as moment from 'moment';

@Component({
  selector: "app-active-survey-card",
  templateUrl: "./active-survey-card.component.html",
  styleUrls: ["./active-survey-card.component.css"],
})
export class ActiveSurveyCardComponent implements OnInit {
  @Input() public survey: any;
  public description: string;
  public audience: string = "";
  public time: any = "Active Time: ";
  public link:string;

  constructor( public dialog: MatDialog , private router:Router) {}

  ngOnInit(): void {
    console.log("survey input : " + this.survey.surveyTitle);
    console.log("link"+this.survey.surveyLink);
    console.log("survey input : " + this.survey.targetAudience);
    this.description = this.survey.description;
    this.audience += this.survey.targetAudience;
    this.time += this.survey.activeTime + " mins";
    this.link = this.survey.surveyLink;
    console.log(this.survey);
  }
  formatDate(momentDate) {
    this.time = moment(momentDate);
    return this.time.fromNow();
  }

  openDialog() {
    this.dialog.open(EmailingComponent, {
      // width: '548px',
      // height: '367.98px',
      data: {link: this.link}
    });
  }
  
 
  openResponse(){
    this.router.navigate(['/sidenav/activesurvey',this.survey.surveyTitle,this.survey.activeSurveyId]);
    console.log("checking");
  }
}
