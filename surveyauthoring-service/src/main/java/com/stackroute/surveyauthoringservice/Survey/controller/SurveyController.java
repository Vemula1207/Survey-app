package com.stackroute.surveyauthoringservice.Survey.controller;
import com.stackroute.surveyauthoringservice.Survey.exception.SurveyAlreadyExistsException;
import com.stackroute.surveyauthoringservice.Survey.exception.SurveyNotFoundException;
import com.stackroute.surveyauthoringservice.Survey.model.Survey;
import com.stackroute.surveyauthoringservice.Survey.service.SurveyService;
import io.swagger.annotations.Api;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1")
//@Api(value = "surveyauthoring-service")
public class SurveyController {

    private SurveyService surveyService;
    @Autowired
    private RabbitTemplate template;
    // @Value("${spring.rabbitmq.exchange}")
    // private String exchange;
    // @Value("${spring.rabbitmq.producerRoutingKey}")
    // private String producerRoutingKey;


    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    ;

    @PostMapping("/survey")
    public ResponseEntity<Survey> saveSurvey(@RequestBody Survey survey) throws SurveyAlreadyExistsException {

        Survey saveSurvey = surveyService.saveSurvey(survey);

        //template.convertAndSend(exchange, producerRoutingKey, saveSurvey);

        return new ResponseEntity<>(saveSurvey, HttpStatus.CREATED);
    }

    @GetMapping("/surveys")
    public ResponseEntity<List<Survey>> getAllSurvey() {
        return new ResponseEntity<List<Survey>>((List<Survey>) surveyService.getAllSurvey(), HttpStatus.OK);
    }

    @GetMapping("survey/{surveyTitle}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable("surveyTitle") String surveyTitle) throws SurveyNotFoundException {
        return new ResponseEntity<Survey>(surveyService.getSurveyByTitle(surveyTitle), HttpStatus.OK);
    }
    @GetMapping("surveys/{createdBy}")
    public ResponseEntity<List<Survey>>getSurveyByCreatedBy(@PathVariable("createdBy") String createdBy) throws SurveyNotFoundException {
        return new ResponseEntity<List<Survey>>((List<Survey>)surveyService.getSurveyByCreatedBy(createdBy), HttpStatus.OK);
    }

    @PutMapping("survey")
    public ResponseEntity<Survey> updateQuestion(@RequestBody Survey question) throws SurveyAlreadyExistsException {
        Survey updatedSurvey = surveyService.updateSurvey(question);
        return new ResponseEntity<>(updatedSurvey, HttpStatus.OK);
    }
}




