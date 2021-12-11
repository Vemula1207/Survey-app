package com.stackroute.surveyauthoringservice.questiongroup;


import com.stackroute.surveyauthoringservice.question.Question;
import com.stackroute.surveyauthoringservice.question.QuestionAlreadyExistsException;
import com.stackroute.surveyauthoringservice.question.QuestionNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionGroupServiceImpl implements QuestionGroupService {
    private QuestionGroupRepository questionGroupRepository;

    @Autowired
    public QuestionGroupServiceImpl(QuestionGroupRepository questionRepository) {
        this.questionGroupRepository = questionRepository;
    }


    @Override
    public QuestionGroup saveQuestionGroup(QuestionGroup questionGroup) throws QuestionGroupAlreadyExistsException {
        if(questionGroupRepository.existsById(questionGroup.getGroupTitle())){
            throw new QuestionGroupAlreadyExistsException();
        }
       QuestionGroup questionGroupObject = questionGroupRepository.save(questionGroup);
            return questionGroupObject;

    }

    @Override
    public QuestionGroup updateQuestionGroup(QuestionGroup questionGroup) throws QuestionGroupNotFoundException {
        QuestionGroup questionGroups = null;
        if(questionGroupRepository.existsById(questionGroup.getGroupTitle())) {
            Optional optional = questionGroupRepository.findById(questionGroup.getGroupTitle());
            if (optional.isPresent()) {
                QuestionGroup getQuestionGroup = questionGroupRepository.findById(questionGroup.getGroupTitle()).get();
                questionGroupRepository.save(questionGroup);
                return getQuestionGroup;
            }
        }
        else {
            throw new QuestionGroupNotFoundException();
        }
        return questionGroupRepository.save(questionGroup);
    }

    @Override
    public List<QuestionGroup> getAllQuestionGroup() {
        return (List<QuestionGroup>) questionGroupRepository.findAll();
    }
}

