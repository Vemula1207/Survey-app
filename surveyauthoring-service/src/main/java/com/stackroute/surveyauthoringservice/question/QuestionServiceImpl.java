package com.stackroute.surveyauthoringservice.question;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class QuestionServiceImpl implements QuestionService {
    private QuestionRepository questionRepository;

    @Autowired
    public QuestionServiceImpl(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    @Override
    public Question saveQuestion(Question question) throws QuestionAlreadyExistsException {


            UUID uuid = UUID.randomUUID();
            question.setQuestionId(uuid);
            Question questions = questionRepository.save(question);
            return questions;



    }

    @Override
    public Question updateQuestion(Question question) throws QuestionNotFoundException {
        Question updatedQuestion = null;

        if(questionRepository.existsById(question.getQuestionId())) {
            Optional<Question> optional = questionRepository.findById(question.getQuestionId());
            if (optional.isPresent()) {
                Question getQuestion = questionRepository.findById(question.getQuestionId()).get();
                questionRepository.save(question);
                return getQuestion;
            }
        }
        else {
            throw new QuestionNotFoundException();
        }
        return questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return  questionRepository.findAll();
    }

   @Override
    public List<Question> getAllQuestionByTags(String tags) {
        String [] tagList= tags.split(",");
       HashSet<Question> set = new HashSet<>();
       List<Question> finalList = new ArrayList<>();
        for(int i =0; i< tagList.length;i++){
            List<Question> tagAnswer= questionRepository.getAllQuestionByTags(tagList[i]);
            set.addAll(tagAnswer);


        }
        finalList.addAll(set);
       return finalList;
    }


    @Override
    public List<Question> getAllQuestionByName(String questionGroup) {
        return questionRepository.getAllQuestionByName(questionGroup);
    }

}