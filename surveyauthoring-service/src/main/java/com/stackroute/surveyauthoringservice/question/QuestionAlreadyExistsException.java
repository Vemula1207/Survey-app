package com.stackroute.surveyauthoringservice.question;

public class QuestionAlreadyExistsException extends RuntimeException {
    private String message;

    public QuestionAlreadyExistsException(String message) {
        super();
        this.message = message;
    }

    public QuestionAlreadyExistsException() {
        super();
    }
}
