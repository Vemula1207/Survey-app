package com.stackroute.surveyengineservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
@CrossOrigin
public class SurveyengineServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SurveyengineServiceApplication.class, args);
	}

}
