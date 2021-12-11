package com.stackroute.surveyauthoringservice.question;

import io.swagger.annotations.Api;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/v1")
//@Api(value = "surveyauthoring-service")
public class QuestionController {

    private QuestionService questionService;

    @Autowired
    public QuestionController(QuestionService questionService) {
        this.questionService = questionService;
    }

    @Autowired
    public RabbitTemplate template;
    @Value("${spring.rabbitmq.exchange}")
    private String exchange;
    @Value("${spring.rabbitmq.producerRoutingKey}")
    private String producerRoutingKey;

    @PostMapping("/question")
    public ResponseEntity<Question> saveQuestion(@RequestBody Question question) throws QuestionAlreadyExistsException {
        Question savedQuestion = questionService.saveQuestion(question);

        //template.convertAndSend(RabbitMqConfig.EXCHANGE, RabbitMqConfig.QUEUE_QUESTION, savedQuestion);

        template.convertAndSend(exchange, producerRoutingKey, savedQuestion);

        return new ResponseEntity<>(savedQuestion, HttpStatus.CREATED);
    }


    @PutMapping("/question")
    public ResponseEntity<Question> updateQuestion(@RequestBody Question question) throws QuestionNotFoundException {
        Question updatedQuestion = questionService.updateQuestion(question);
        return new ResponseEntity<>(updatedQuestion, HttpStatus.OK);
    }


    @GetMapping("/questions")
    public ResponseEntity<List<Question>> getAllQuestion() {
        return new ResponseEntity<List<Question>>(questionService.getAllQuestions(), HttpStatus.OK);
    }

    @GetMapping("/questions/{tags}")
    public ResponseEntity<List<Question>> getAllQuestionGroupByTags (@PathVariable("tags") String tags){
        try {
            return new ResponseEntity<List<Question>>(questionService.getAllQuestionByTags(tags), HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<List<Question>>(HttpStatus.CONFLICT);
        }
    }

    @GetMapping("/question/{questionGroup}")
    public ResponseEntity<List<Question>>  getAllQuestionGroupByName(@PathVariable("questionGroup") String questionGroup) {
        try {
            return new ResponseEntity<List<Question>>(questionService.getAllQuestionByName(questionGroup),HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return new ResponseEntity<List<Question>>(HttpStatus.CONFLICT);
        }
    }

}