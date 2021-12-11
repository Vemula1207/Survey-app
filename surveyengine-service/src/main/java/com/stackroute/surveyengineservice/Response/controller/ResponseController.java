package com.stackroute.surveyengineservice.Response.controller;

import com.stackroute.surveyengineservice.Response.model.Response;
import com.stackroute.surveyengineservice.Response.service.ResponseService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(value = "/api/v1")
@CrossOrigin
//@Api(value = "surveyengine-service")
public class ResponseController {

    private ResponseService responseService;

    @Autowired
    public ResponseController(ResponseService responseService) {
        this.responseService = responseService;
    }

    @PostMapping("/response")
    public ResponseEntity<Response> saveResponse(@RequestBody Response question)  {
        Response savedResponse =responseService.saveResponse(question);
        return new ResponseEntity<>(savedResponse, HttpStatus.CREATED);
    }

    @GetMapping("/responses")
    public ResponseEntity<Iterable<Response>> getAllResponse() {
        return new ResponseEntity<Iterable<Response>>(responseService.getAllResponse(), HttpStatus.OK);
    }
    @GetMapping("/responses/{surveyId}")
    public ResponseEntity<List<Response>> getAllResponseBySurveyId(@PathVariable UUID surveyId){
        return new ResponseEntity<List<Response>>(responseService.getAllResponseBySurveyId(surveyId),HttpStatus.OK);

    }

}
