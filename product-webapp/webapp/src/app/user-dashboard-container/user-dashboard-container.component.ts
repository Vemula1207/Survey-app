import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActiveSurveyService } from "../services/activeSurvey.service";
import { LoginServicesService } from "../services/login-services.service";
import { SurveyListingService } from "../services/surveyListing.service";

@Component({
  selector: "app-user-dashboard-container",
  templateUrl: "./user-dashboard-container.component.html",
  styleUrls: ["./user-dashboard-container.component.css"],
})
export class UserDashboardContainerComponent implements OnInit {
  public surveys: any = [];
  errormsg: string = "";
  constructor(private service: ActiveSurveyService, private router: Router, private securityService:LoginServicesService) {}
  // constructor() { }
  ngOnInit(): void {
    this.service.getAllActiveSurveys().subscribe(
      (data) => (this.surveys = data.content),
      (error) => (this.errormsg = error)
    );
  }
  logout()
  {
    this.securityService.logout() .subscribe(() => {
      this.securityService.removeToken();
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("userRole");
      this.router.navigate(['']);
    });
  }
  register(){
    this.router.navigate(['/payment']);
  }
}
