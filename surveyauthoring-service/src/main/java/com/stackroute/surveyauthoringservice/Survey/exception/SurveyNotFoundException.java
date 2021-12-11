package com.stackroute.surveyauthoringservice.Survey.exception;

public class SurveyNotFoundException extends RuntimeException{
    private String message;

    public SurveyNotFoundException(String message){
        super();
        this.message=message;
    }
    public SurveyNotFoundException(){
        super();
    }

}





