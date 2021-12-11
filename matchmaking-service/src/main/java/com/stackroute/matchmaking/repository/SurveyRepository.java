package com.stackroute.matchmaking.repository;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.stereotype.Repository;

import com.stackroute.matchmaking.model.Survey;

@Repository
public interface SurveyRepository extends Neo4jRepository<Survey,Long>{

}
