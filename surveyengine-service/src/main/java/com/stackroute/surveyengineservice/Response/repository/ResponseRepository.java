package com.stackroute.surveyengineservice.Response.repository;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;
import com.stackroute.surveyengineservice.Response.model.Response;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface ResponseRepository extends ElasticsearchRepository<Response, UUID> {
    public List<Response> getAllResponseBySurveyId(UUID surveyId);

}
