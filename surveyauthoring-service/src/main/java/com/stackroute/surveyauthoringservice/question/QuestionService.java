package com.stackroute.surveyauthoringservice.question;

import java.util.List;

public interface QuestionService {

    Question saveQuestion(Question question) throws QuestionAlreadyExistsException ;
    Question updateQuestion(Question question) throws QuestionNotFoundException ;
    List<Question> getAllQuestions() ;
    List<Question> getAllQuestionByTags(String tags);
    public List<Question> getAllQuestionByName(String questionGroup);

}
