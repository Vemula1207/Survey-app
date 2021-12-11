import { QuestionResponse } from "./question-response";

export class ResponseAnalysis {
    surveyId?: string;
    responseId?: string;
    filledBy?: string;
    createdOn?: string;
    questionResponseList?: QuestionResponse[];
}
