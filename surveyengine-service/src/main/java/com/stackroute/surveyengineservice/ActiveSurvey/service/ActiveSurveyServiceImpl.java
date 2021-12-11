package com.stackroute.surveyengineservice.ActiveSurvey.service;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;
import com.stackroute.surveyengineservice.ActiveSurvey.repository.ActiveSurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class ActiveSurveyServiceImpl implements ActiveSurveyService {
    private ActiveSurveyRepository activeSurveyRepository;

    @Autowired
    public ActiveSurveyServiceImpl(ActiveSurveyRepository activeSurveyRepository) {
        this.activeSurveyRepository = activeSurveyRepository;
    }

    @Override
    public ActiveSurvey saveActiveSurvey(ActiveSurvey activeSurvey) {
        UUID uuid = UUID.randomUUID();
        activeSurvey.setActiveSurveyId(uuid);
        activeSurvey.setActivatedOn(System.currentTimeMillis());
        activeSurvey.setSurveyLink("https://surveyguru.stackroute.io/fillsurvey/"+activeSurvey.getSurveyTitle()+"/"+activeSurvey.getActiveSurveyId());
        return activeSurveyRepository.save(activeSurvey);
    }

    @Override
    public List<ActiveSurvey> getAllActiveSurvey() {

        return (List<ActiveSurvey>) activeSurveyRepository.findAll();
    }

    @Override
    public ActiveSurvey getActiveSurveyByUUID(UUID activeSurveyId) {

        Optional<ActiveSurvey> activeSurveyObject = activeSurveyRepository.findById(activeSurveyId);
        if (activeSurveyObject.isPresent()) {
            return activeSurveyObject.get();
        } else {
            return null;
        }

    }

    @Override
    public List<ActiveSurvey> getActiveSurveyByCreatedBy(String createdBy) {
        List<ActiveSurvey> activeSurveys=activeSurveyRepository.getAllSurveyByCreatedBy(createdBy);

        return activeSurveys;
    }




}
