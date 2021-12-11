package com.stackroute.surveyauthoringservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.web.bind.annotation.CrossOrigin;


 @EnableEurekaClient
 @SpringBootApplication
 @CrossOrigin(origins = "http://localhost:8090")
 public class SurveyauthoringServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SurveyauthoringServiceApplication.class, args);
 	}
}
