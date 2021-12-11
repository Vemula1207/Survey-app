package com.stackroute.surveyauthoringservice.questiongroup;

import com.stackroute.surveyauthoringservice.question.QuestionAlreadyExistsException;

import java.util.List;

public interface QuestionGroupService {
    QuestionGroup saveQuestionGroup(QuestionGroup questionGroup) throws QuestionGroupAlreadyExistsException;
    QuestionGroup updateQuestionGroup(QuestionGroup questionGroup) throws QuestionGroupNotFoundException;
    List<QuestionGroup> getAllQuestionGroup();
}
