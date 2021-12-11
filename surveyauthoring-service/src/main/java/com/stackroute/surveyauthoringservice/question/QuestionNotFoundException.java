package com.stackroute.surveyauthoringservice.question;

public class QuestionNotFoundException extends RuntimeException {

    private String message;

    public QuestionNotFoundException(String message) {
        super();
        this.message = message;
    }

    public QuestionNotFoundException() {
        super();
    }

}
