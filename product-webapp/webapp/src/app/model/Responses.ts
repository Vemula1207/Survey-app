import { RespQuestion } from "./RespQuestion";

export class Responses{
    surveyId?: any;
	responseId?:String;
	questionResponseList?: RespQuestion[];
	filledBy?: String;
    createdOn?: Number;
}