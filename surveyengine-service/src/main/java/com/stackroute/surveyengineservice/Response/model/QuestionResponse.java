package com.stackroute.surveyengineservice.Response.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public  class QuestionResponse {

        public UUID questionId;
        public String questionBody;
        public List<String> options;
        public List<String> answers;

    }

