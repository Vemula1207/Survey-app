package com.stackroute.surveyauthoringservice.questiongroup;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class QuestionGroupGlobalExceptionHandler {

    @ExceptionHandler(value= QuestionGroupAlreadyExistsException.class)
    public ResponseEntity<String> QuestionGroupAlreadyExistsException()
    {
        return new ResponseEntity<String>("QuestionGroupAlreadyExistsException", HttpStatus.CONFLICT);
    }

    @ExceptionHandler(value= QuestionGroupNotFoundException.class)
    public ResponseEntity<String> QuestionGroupNotFoundException()
    {
        return new ResponseEntity<String>("QuestionGroupNotFoundException",HttpStatus.NOT_FOUND);
    }


}