package com.stackroute.oauth2.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.stackroute.oauth2.model.UserData;


@Repository
public interface MongoRepo extends MongoRepository<UserData,String> {
	

}