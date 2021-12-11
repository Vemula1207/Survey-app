package com.stackroute.surveyengineservice.ActiveSurvey.repository;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;
import org.springframework.data.elasticsearch.annotations.Query;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ActiveSurveyRepository extends ElasticsearchRepository<ActiveSurvey, UUID> {

    public List<ActiveSurvey> getAllSurveyByCreatedBy(String createdBy);

}
