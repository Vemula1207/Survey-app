import { Timestamp } from "rxjs/internal/operators/timestamp";
import { Question } from "./Question";

export class Survey
{
	"surveyTitle" : string;
	"tags": string[];
	"description": string;
	"createdBy" : string;
	"createdOn" : number;
	"surveyStatus" : string; // ACTIVE/DORMANT
	"activeTime" : number;
	"questions" : Question[] ;
	"type": string; // SINGLE/FLAT
    "uiSettings": {};
	"targetAudience": string;
	
}
