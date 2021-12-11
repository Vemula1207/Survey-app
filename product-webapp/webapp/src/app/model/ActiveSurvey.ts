import { Question } from "./Question";
import { UiSetting } from "./UiSetting";

export class ActiveSurvey
{
    "surveyTitle" : string;
	"description": string;
	"createdBy" : string;
	"status" : string; // ACTIVE/DORMANT
	"activeTime" : number;
	"question" : Question[]; 
    "uiSettings": UiSetting;
    "activatedOn":number;
    "surveyLink":string;
	"targetAudience": string;
	"activeSurveyId": string;
}