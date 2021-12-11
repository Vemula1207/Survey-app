package com.stackroute.matchmaking.repository;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.neo4j.repository.Neo4jRepository;

import com.stackroute.matchmaking.model.Users;
import org.springframework.data.neo4j.repository.config.EnableNeo4jRepositories;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository extends Neo4jRepository<Users,String>{

}
