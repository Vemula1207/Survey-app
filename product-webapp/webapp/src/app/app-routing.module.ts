import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from './callback/callback.component';
import { DisplayQuestionGroupsComponent } from './display-question-groups/display-question-groups.component';
import { DisplayQuestionsOfQuestionGroupComponent } from './display-questions-of-question-group/display-questions-of-question-group.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';

import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { CreateQuestionGroupDialogComponent } from './create-question-group-dialog/create-question-group-dialog.component';
import { SurveyBasicDetailsComponent } from './create-survey/survey-basic-details/survey-basic-details.component';
import { OpenCreateQuestionDialogComponent } from './open-create-question-dialog/open-create-question-dialog.component';
import { SurveyListingComponent } from './survey-listing/survey-listing.component';
import { UserDashboardContainerComponent } from './user-dashboard-container/user-dashboard-container.component';
import { SurveyFillingComponent } from './survey-filling/survey-filling.component';
import { ActiveSurveyListComponent } from './active-survey-list/active-survey-list.component';
import { ResponseAnalysisComponent } from './response-analysis/response-analysis.component';
import { UserSurveyCardComponent } from './user-survey-card/user-survey-card.component';
import { LandingComponent } from './landing/landing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuardDesendentService } from './services/auth-guard-desendent.service';
import { Pay2Component } from './pay2/pay2.component';
const routes: Routes = [
  // {path:"displaygroups",component:DisplayQuestionGroupsComponent},
  { path:'user-detail', component: UserProfileComponent},
  { path:'', component: LandingComponent},
  {path:'fillsurvey/:title/:surveyid',component:SurveyFillingComponent},
  // {path:'home',component:HomeComponent,canActivate:[AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'callback', component: CallbackComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'createQuestion', component:OpenCreateQuestionDialogComponent},
  {path:'home',component:SideNavbarComponent},
  { path: 'createSurvey', component: CreateSurveyComponent },
  {path:'createQuestionGroup', component:CreateQuestionGroupDialogComponent},
  {path: 'basicDeatis', component: SurveyBasicDetailsComponent},
  {path: 'payment', component: Pay2Component},
  // {path: 'sendMail', component: ActiveSurveyListComponent},
  // {path:'surveylist', component:SurveyListingComponent},
  {path:'filler-dash', component: UserDashboardContainerComponent,canActivate:[AuthGuardDesendentService]},
  {path:'sidenav',component :SideNavbarComponent,canActivate:[AuthGuardDesendentService],
    children:[
      {path:"displaygroups",component:DisplayQuestionGroupsComponent},
      {path:"displaygroups/:questiongroup",component:DisplayQuestionsOfQuestionGroupComponent},
      {path:"createsurvey",component:CreateSurveyComponent},
      {path:'surveylist', component:SurveyListingComponent},
      {path:'activesurvey', component:ActiveSurveyListComponent},
      {path:"activesurvey/:surveyTitle/:surveyId", component:ResponseAnalysisComponent}

    ]
  },
  {path: 'userSurveyCard',component: UserSurveyCardComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
