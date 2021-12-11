package com.stackroute.matchmaking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.repository.RepositoryDefinition;

@EnableEurekaClient
@SpringBootApplication
@ComponentScan("controller")
public class Neo4jDemo {

	public static void main(String[] args) {
		SpringApplication.run(Neo4jDemo.class, args);
	}

}
