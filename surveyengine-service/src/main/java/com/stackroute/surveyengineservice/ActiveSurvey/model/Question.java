package com.stackroute.surveyengineservice.ActiveSurvey.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {

    private UUID questionId;
    public List<String> tags;
    private String questionBody;
    private List<String> options;
    private QuestionStatus questionStatus;
    public String questionGroup;
    private QuestionType questionType;
    private String createdBy;
    private long createdOn;
}
