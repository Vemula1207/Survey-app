package com.stackroute.surveyauthoringservice.questiongroup;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data
public class QuestionGroup {
   @Id
   private String groupTitle;
   private List<String> tags;
   private String createdBy;
   private long createdOn;
}
