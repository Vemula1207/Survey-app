package com.stackroute.surveyauthoringservice.question;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class QuestionGlobalExceptionHandler {

//    @Value(value="${data.exception.message3}")
//    private String message3;
//    @Value(value="${data.exception.message4}")
//    private String message4;

    @ExceptionHandler(value=QuestionAlreadyExistsException.class)
    public ResponseEntity<String>QuestionAlreadyExistsException(QuestionAlreadyExistsException qap)
    {
        return new ResponseEntity<String>("QuestionAlreadyExistsException", HttpStatus.CONFLICT);
    }
    @ExceptionHandler(value=QuestionNotFoundException.class)
    public ResponseEntity<String> QuestionNotFoundException(QuestionNotFoundException bnf)
    {
        return new ResponseEntity<String>("QuestionNotFoundException",HttpStatus.NOT_FOUND);
    }

}