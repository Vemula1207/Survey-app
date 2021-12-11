package com.stackroute.surveyauthoringservice.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Question implements Serializable {

    @Id
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