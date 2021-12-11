package com.stackroute.surveyauthoringservice.Survey.service;

import com.stackroute.surveyauthoringservice.Survey.exception.SurveyAlreadyExistsException;
import com.stackroute.surveyauthoringservice.Survey.exception.SurveyNotFoundException;
import com.stackroute.surveyauthoringservice.Survey.model.Survey;

import java.util.List;

public interface SurveyService {

    Survey saveSurvey(Survey survey) throws SurveyAlreadyExistsException;
    Survey updateSurvey(Survey survey) throws SurveyAlreadyExistsException;
    List<Survey> getAllSurvey();
    Survey getSurveyByTitle(String surveyTitle) throws SurveyNotFoundException;
    List<Survey> getSurveyByCreatedBy(String createdBy);
}
