package com.stackroute.surveyauthoringservice.Survey.dao;

import com.stackroute.surveyauthoringservice.Survey.model.Survey;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface SurveyRepository extends MongoRepository<Survey,String> {

    public List<Survey> getSurveyByCreatedBy(String createdBy);

}
