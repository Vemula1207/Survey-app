package com.stackroute.surveyauthoringservice.questiongroup;

public class QuestionGroupNotFoundException extends RuntimeException {
    private String message;

    public QuestionGroupNotFoundException(String message) {
        super();
        this.message = message;
    }

    public QuestionGroupNotFoundException() {
        super();
    }
}
