package com.stackroute.surveyengineservice.Response.service;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;
import com.stackroute.surveyengineservice.Response.model.Response;
import com.stackroute.surveyengineservice.Response.repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.annotation.Id;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ResponseServiceImpl implements ResponseService{

    private ResponseRepository responseRepository;

    @Autowired
    public ResponseServiceImpl(ResponseRepository responseRepository) {
        this.responseRepository = responseRepository;
    }


    @Override
    public Response saveResponse(Response response) {

        UUID uuid = UUID.randomUUID();
        response.setResponseId(uuid);

        return responseRepository.save(response);
    }

    @Override
    public Iterable<Response> getAllResponse() {
        return (Iterable<Response>) responseRepository.findAll();
    }

    @Override
    public List<Response> getAllResponseBySurveyId(UUID surveyId) {
        List<Response> response = responseRepository.getAllResponseBySurveyId(surveyId);
        return response;
    }
}
