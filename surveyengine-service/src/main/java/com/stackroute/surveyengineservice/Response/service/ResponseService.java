package com.stackroute.surveyengineservice.Response.service;

import com.stackroute.surveyengineservice.Response.model.Response;

import java.util.List;
import java.util.UUID;

public interface ResponseService {
    Response saveResponse(Response response);
    Iterable<Response> getAllResponse();
    List<Response> getAllResponseBySurveyId(UUID surveyId);

}
