package com.stackroute.surveyauthoringservice.questiongroup;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionGroupRepository extends MongoRepository<QuestionGroup,String> {


}
