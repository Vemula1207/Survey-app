package com.stackroute.matchmaking.repository;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import com.stackroute.matchmaking.model.AgeGroup;
import com.stackroute.matchmaking.model.Gender;
import com.stackroute.matchmaking.model.Gender.gen;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.stereotype.Repository;


@Repository
public interface GenderRepo  extends Neo4jRepository<Gender,gen> {

}
