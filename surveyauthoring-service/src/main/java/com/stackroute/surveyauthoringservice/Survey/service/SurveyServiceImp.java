package com.stackroute.surveyauthoringservice.Survey.service;

import com.stackroute.surveyauthoringservice.Survey.exception.SurveyAlreadyExistsException;
import com.stackroute.surveyauthoringservice.Survey.exception.SurveyNotFoundException;
import com.stackroute.surveyauthoringservice.Survey.model.Survey;
import com.stackroute.surveyauthoringservice.Survey.dao.SurveyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyServiceImp implements SurveyService {
    private SurveyRepository surveyRepository;

    @Autowired
    public SurveyServiceImp(SurveyRepository surveyRepository){
        this.surveyRepository=surveyRepository;
    }

    @Override
    public Survey saveSurvey(Survey survey) throws SurveyAlreadyExistsException {

        if(surveyRepository.existsById(survey.getSurveyTitle())){
            throw new SurveyAlreadyExistsException("Already Exists");
        }
        survey.setCreatedOn(System.currentTimeMillis());
        Survey surveys = surveyRepository.save(survey);

        return surveys;
    }

    @Override
    public Survey updateSurvey(Survey survey) throws SurveyNotFoundException {
        Survey updatedSurvey = null;

        if(surveyRepository.existsById(survey.getSurveyTitle())) {
            Optional<Survey> surveyObject = surveyRepository.findById(survey.getSurveyTitle());
            if (surveyObject.isPresent()) {
                //
                //updatedSurvey = saveSurvey(survey);
                Survey getSurvey = surveyRepository.findById(survey.getSurveyTitle()).get();
                getSurvey.setSurveyStatus(survey.getSurveyStatus());
                getSurvey.setCreatedBy(survey.getCreatedBy());
                getSurvey.setCreatedOn(System.currentTimeMillis());
                getSurvey.setDescription(survey.getDescription());
                getSurvey.setTags(survey.getTags());
                getSurvey.setType(survey.getType());
                getSurvey.setQuestions(survey.getQuestions());
                return getSurvey;
            }
        }
        else {
            throw new SurveyNotFoundException();
        }
        return surveyRepository.save(survey);

    }

    @Override
    public List<Survey> getAllSurvey() {
        return (List<Survey>) surveyRepository.findAll();
    }

    @Override
    public Survey getSurveyByTitle(String surveyTitle) throws SurveyNotFoundException {
        Optional<Survey> surveyObject = surveyRepository.findById(surveyTitle);
        if(surveyObject.isPresent()) {
           return surveyObject.get();
        }else {
            throw new SurveyNotFoundException();
        }
    }

    @Override
    public List<Survey> getSurveyByCreatedBy(String createdBy) {
        return (List<Survey>)surveyRepository.getSurveyByCreatedBy(createdBy);
    }
}

