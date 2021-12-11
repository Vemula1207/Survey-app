package com.stackroute.surveyengineservice.ActiveSurvey.controller;

import com.stackroute.surveyengineservice.ActiveSurvey.model.ActiveSurvey;
import com.stackroute.surveyengineservice.ActiveSurvey.repository.ActiveSurveyRepository;
import com.stackroute.surveyengineservice.ActiveSurvey.service.ActiveSurveyService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
//@Api(value = "surveyengine-service")
public class ActiveSurveyController {
    private ActiveSurveyService activeSurveyService;

    @Autowired
    public ActiveSurveyController (ActiveSurveyService activeSurveyService){
        this.activeSurveyService= activeSurveyService;
    };
    @Autowired
    private ActiveSurveyRepository activeSurveyRepository;
    @PostMapping("/activeSurvey")
        public ResponseEntity<ActiveSurvey> saveActiveSurvey(@RequestBody ActiveSurvey activeSurvey)  {
        ActiveSurvey saveActiveSurvey = activeSurveyService.saveActiveSurvey(activeSurvey);
        return new ResponseEntity<ActiveSurvey>(saveActiveSurvey, HttpStatus.CREATED);

    }


   @GetMapping("/activesurvey/{activeSurveyTitle}/{activeSurveyUUID}")
    public  ResponseEntity<ActiveSurvey> getActiveSurveyByUUID (@PathVariable String activeSurveyTitle, @PathVariable
     UUID activeSurveyUUID) {
        return new ResponseEntity<ActiveSurvey>(activeSurveyService.getActiveSurveyByUUID(activeSurveyUUID), HttpStatus.OK);
    }

    @GetMapping("/activesurveys")
    public  ResponseEntity<Iterable<ActiveSurvey>>getAllActiveSurvey() {
        return new ResponseEntity<Iterable<ActiveSurvey>>(activeSurveyRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping("/activesurvey/{createdBy}")
    public  ResponseEntity<List<ActiveSurvey>> getActiveSurveyByCreatedBy (@PathVariable String createdBy) {
        return new ResponseEntity<List<ActiveSurvey>>(activeSurveyService.getActiveSurveyByCreatedBy(createdBy), HttpStatus.OK);
    }
}
