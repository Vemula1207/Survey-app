package com.stackroute.surveyauthoringservice.questiongroup;

import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1")
//@Api(value = "surveyauthoring-service")
public class QuestionGroupController {

    private QuestionGroupService questionGroupService;

    @Autowired
    public QuestionGroupController(QuestionGroupService questionGroupService) {
        this.questionGroupService = questionGroupService;
    }

    @PostMapping("/questiongroup")
    public ResponseEntity<QuestionGroup> saveQuestionGroup(@RequestBody QuestionGroup questionGroup) throws QuestionGroupAlreadyExistsException {
        QuestionGroup savedQuestion =questionGroupService.saveQuestionGroup(questionGroup);
        return new ResponseEntity<>(savedQuestion, HttpStatus.CREATED);
    }

    @PutMapping("questiongroup")
    public ResponseEntity<QuestionGroup> updateQuestionGroup(@RequestBody QuestionGroup questionGroup) throws QuestionGroupNotFoundException {
        QuestionGroup updatedQuestion = questionGroupService.updateQuestionGroup(questionGroup);
        return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
    }


    @GetMapping("/questiongroups")
    public  ResponseEntity<List<QuestionGroup>> getAllQuestionGroup() {
        return new ResponseEntity<List<QuestionGroup>>((List<QuestionGroup>) questionGroupService.getAllQuestionGroup(), HttpStatus.OK);
    }
}
