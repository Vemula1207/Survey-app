package com.stackroute.surveyengineservice.ActiveSurvey.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;


import java.util.List;
import java.util.UUID;

@Document(indexName = "activesurvey" , shards= 2)
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ActiveSurvey {
    @Id
    public UUID activeSurveyId;
    public String surveyTitle;
    public Status status;
    public  long activeTime;
    public List<Question> question;
    public  String createdBy;
    public String description ;
    public String targetAudience;
    public String surveyLink;
    public long activatedOn;
    public Object uiSettings;

}
