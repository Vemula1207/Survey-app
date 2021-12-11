package com.stackroute.surveyengineservice.Response.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;


import java.util.List;
import java.util.UUID;

@Document(indexName = "response", shards = 2)
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {

	public UUID surveyId;
	@Id
    public UUID responseId;
    public String filledBy;
    public long createdOn;
    public List<QuestionResponse> questionResponseList;


}
