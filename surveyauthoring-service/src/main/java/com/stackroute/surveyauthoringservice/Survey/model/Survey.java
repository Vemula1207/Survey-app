package com.stackroute.surveyauthoringservice.Survey.model;

import com.stackroute.surveyauthoringservice.question.Question;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Survey")
public class Survey {

        @Id
        private String surveyTitle;
        private List<String> tags;
        private String description;
        private String createdBy;
        private long createdOn;
        private SurveyStatus surveyStatus;
        private List<Question> questions;
        private int activeTime;
        private SurveyType type;
        public Object uiSettings;
        private String targetAudience;


    }



