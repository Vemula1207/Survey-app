package com.stackroute.surveyengineservice.ActiveSurvey.service;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;

import java.util.List;
import java.util.UUID;

public interface ActiveSurveyService {
    ActiveSurvey saveActiveSurvey(ActiveSurvey activeSurvey);
    List<ActiveSurvey> getAllActiveSurvey();
    ActiveSurvey getActiveSurveyByUUID(UUID activeSurveyId);
    List<ActiveSurvey> getActiveSurveyByCreatedBy(String createdBy);

}
