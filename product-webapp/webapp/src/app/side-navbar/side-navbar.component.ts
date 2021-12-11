import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent  {
  displayQuestion = false;
  createSurvey = false;
  home = true;
  constructor(private router : Router) { }
  opened=false;

  homes(){
    // this.home = true;
    // this.displayQuestion = false;
    // this.createSurvey = false;
    this.router.navigate(['/sidenav/surveylist']);
  }

  displayQuestionGroups(){
    this.router.navigate(['/sidenav/displaygroups']);
  }

  createSurveys(){
    this.router.navigate(['/sidenav/createsurvey']);
  }

  displayActiveSurveys(){
    this.router.navigate(['/sidenav/activesurvey']);
  }
}


