package com.stackroute.surveyauthoringservice.question;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QuestionRepository extends MongoRepository<Question, UUID> {
    @Query("{'tags':?0}")
    public List<Question> getAllQuestionByTags(String tags);
    @Query("{'questionGroup':?0}")
    public List<Question> getAllQuestionByName(String questionGroup);

}