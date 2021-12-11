import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActiveSurvey } from "../model/ActiveSurvey";
import { LoginServicesService } from "../services/login-services.service";
import { SurveyListingService } from "../services/surveyListing.service";

@Component({
  selector: "app-survey-listing",
  templateUrl: "./survey-listing.component.html",
  styleUrls: ["./survey-listing.component.css"],
})
export class SurveyListingComponent implements OnInit {
  public surveys: any = [];
  public createdBy: string;
  errormsg: string = "";
  constructor(private service: SurveyListingService, private router: Router) {}
  // constructor() { }
  ngOnInit(): void {
    this.service.getSurveyDetails().subscribe(
      (data) => (this.surveys = data),
      (error) => (this.errormsg = error)
    );
  }

  // onselect(questionGroup){
  //   this.router.navigate(['/displaygroups',questionGroup.groupTitle]);
  // }
}
