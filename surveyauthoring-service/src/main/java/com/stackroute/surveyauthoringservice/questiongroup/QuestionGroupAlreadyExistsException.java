package com.stackroute.surveyauthoringservice.questiongroup;

public class QuestionGroupAlreadyExistsException extends RuntimeException {
    private String message;

    public QuestionGroupAlreadyExistsException(String message) {
        super();
        this.message = message;
    }

    public QuestionGroupAlreadyExistsException() {
        super();
    }
}
