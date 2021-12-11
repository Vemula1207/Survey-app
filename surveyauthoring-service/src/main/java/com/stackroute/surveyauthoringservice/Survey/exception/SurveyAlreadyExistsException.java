package com.stackroute.surveyauthoringservice.Survey.exception;

public class SurveyAlreadyExistsException extends Exception{

    private String message;
    public SurveyAlreadyExistsException(String message){
        super();
        this.message= message;

    }
}
