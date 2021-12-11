package com.stackroute.surveyauthoringservice.Survey.exception;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @Value(value = "$(data.exception.message1)")
    private String message1;
    @Value(value = "$(data.exception.message2)")
    private String message2;


    @ExceptionHandler(value= SurveyAlreadyExistsException.class)
    public ResponseEntity<String> surveyAlreadyExistsExcepion(SurveyAlreadyExistsException surveyAlreadyExistsException){
        return new ResponseEntity<String>(message1, HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value=SurveyNotFoundException.class)
    public ResponseEntity<String>BlogNotFoundException(SurveyNotFoundException surveyNotFoundException)
    {
        return new ResponseEntity<String>("SurveyNotFoundException",HttpStatus.NOT_FOUND);
    }
}
