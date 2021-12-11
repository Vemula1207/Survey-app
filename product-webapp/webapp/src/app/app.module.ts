import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatStepperModule} from '@angular/material/stepper';
import {  MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import { DisplayQuestionGroupsComponent } from './display-question-groups/display-question-groups.component';
import { HeaderFileComponent } from './header-file/header-file.component';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DisplayQuestionsOfQuestionGroupComponent } from './display-questions-of-question-group/display-questions-of-question-group.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AuthHeaderInterceptorService } from './services/auth-header-interceptor.service';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CreateQuestionGroupComponent } from './create-question-group/create-question-group.component';
import { CreateQuestionGroupDialogComponent } from './create-question-group-dialog/create-question-group-dialog.component';

import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { SurveyBasicDetailsComponent } from './create-survey/survey-basic-details/survey-basic-details.component';
import { SurveyAddQuestionComponent } from './create-survey/survey-add-question/survey-add-question.component';
import { CreateQuestionDialogComponent } from './create-question-dialog/create-question-dialog.component';
import { OpenCreateQuestionDialogComponent } from './open-create-question-dialog/open-create-question-dialog.component';
import { SurveyListingComponent } from './survey-listing/survey-listing.component';
import { SurveyFillingComponent } from './survey-filling/survey-filling.component';
import { SurveyCardComponent } from './survey-card/survey-card.component';
import { SurveyAdditionalInfoComponent } from './create-survey/survey-additional-info/survey-additional-info.component';
import { EmailingComponent } from './emailing/emailing.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserDashboardContainerComponent } from './user-dashboard-container/user-dashboard-container.component';
import { UserSurveyCardComponent } from './user-survey-card/user-survey-card.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ActiveSurveyCardComponent } from './active-survey-card/active-survey-card.component';
import { ActiveSurveyListComponent } from './active-survey-list/active-survey-list.component';
import { ResponseAnalysisComponent } from './response-analysis/response-analysis.component';
import { ChartsModule } from 'ng2-charts';
import { PreviewSurveyComponent } from './create-survey/preview-survey/preview-survey.component';
import { LandingComponent } from './landing/landing.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Pay2Component } from './pay2/pay2.component';

import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { SuccessfulSubmissionMessageComponent } from './successful-submission-message/successful-submission-message.component';
// import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQuestionGroupsComponent,
    HeaderFileComponent,
    LoginComponent,
    DisplayQuestionsOfQuestionGroupComponent,
    SideNavbarComponent,
    HomeComponent,
    CallbackComponent,
    CreateQuestionGroupComponent,
    CreateQuestionGroupDialogComponent,
    CreateSurveyComponent,
    SurveyBasicDetailsComponent,
    SurveyAddQuestionComponent,
    CreateQuestionDialogComponent,
    OpenCreateQuestionDialogComponent,
    SurveyListingComponent,
    SurveyFillingComponent,
    SurveyCardComponent,
    SurveyAdditionalInfoComponent,
    EmailingComponent,
    UserDashboardContainerComponent,
    UserSurveyCardComponent,
    ActiveSurveyCardComponent,
    ActiveSurveyListComponent,
    ResponseAnalysisComponent,
    PreviewSurveyComponent,
    LandingComponent,
    UserProfileComponent,
    Pay2Component,
    RegisterDialogComponent,
    SuccessfulSubmissionMessageComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMultiSelectDropDownModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatStepperModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
    MatStepperModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    ChartsModule,
    // AvatarModule
    
    

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHeaderInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
