package com.stackroute.matchmaking.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import com.stackroute.matchmaking.RabbitMqConfig;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.stackroute.matchmaking.model.AgeGroup;
import com.stackroute.matchmaking.model.Gender;
import com.stackroute.matchmaking.model.Survey;
import com.stackroute.matchmaking.model.Users;
import com.stackroute.matchmaking.model.Gender.gen;
import com.stackroute.matchmaking.repository.AgeGroupRepo;
import com.stackroute.matchmaking.repository.GenderRepo;
import com.stackroute.matchmaking.service.SurveyService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;


@RestController
//@Api(value = "matchmaking-service")
public class SurveyController {
	@Autowired
	private SurveyService service;
	@Autowired
	private AgeGroupRepo ageGroupRepo;
	@Autowired
	private GenderRepo genrepo;
	

	
	@PostConstruct
	public void saveGender() {
		genrepo.save(new Gender(gen.Male));
		genrepo.save(new Gender(gen.Female));
		
		
	}
	@PostConstruct
	public void saveAgeGroup() {
		AgeGroup a1=new AgeGroup("1-18");
		ageGroupRepo.save(a1);
		AgeGroup a2=new AgeGroup("18-30");
		ageGroupRepo.save(a2);
		AgeGroup a3=new AgeGroup("30-55");
		ageGroupRepo.save(a3);
		AgeGroup a4=new AgeGroup("55-100");
		ageGroupRepo.save(a4);
		
	}
	
	

	@GetMapping("/get")
	private List<Users> getAllPerson(){
		return service.getPersons();
		
	}

	@PostMapping("/postperson")
	private Users savePerson(@RequestBody Users person){
		return service.saveUsers(person);
		
	}
	
	@PostMapping("/postsurvey")
	@RabbitListener(queues = RabbitMqConfig.QUEUE_SURVEY)

	private Survey saveSurvey(@RequestBody Survey survey){
		return service.saveSurvey(survey);
		
	}
	
	
	
}
