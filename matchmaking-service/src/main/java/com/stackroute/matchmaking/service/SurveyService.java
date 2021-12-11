package com.stackroute.matchmaking.service;

import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.ling.CoreLabel;
import edu.stanford.nlp.pipeline.Annotation;
import edu.stanford.nlp.pipeline.StanfordCoreNLP;
import edu.stanford.nlp.util.CoreMap;

import java.util.List;
import java.util.Properties;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.matchmaking.model.AgeGroup;
import com.stackroute.matchmaking.model.Gender;
import com.stackroute.matchmaking.model.Survey;
import com.stackroute.matchmaking.model.Users;
import com.stackroute.matchmaking.model.Gender.gen;
import com.stackroute.matchmaking.repository.SurveyRepository;
import com.stackroute.matchmaking.repository.UserRepository;

@Service
public class SurveyService {

	@Autowired
	private SurveyRepository surveyRepository;
	
	@Autowired 
	private UserRepository userRepository;
	
	private int male=0;
	private int female=0;
	
	public List<Users> getPersons() {
		return (List<Users>) userRepository.findAll();
	}
	
	List<Users> u = new ArrayList<>();
	List<String> mailId = new ArrayList<>();
	public Survey saveSurvey(Survey survey) {
		u=(List<Users>)userRepository.findAll();
		List <String> location=nlp(survey.getDescription());
		for(Users user: u) {
			
			for(String s:location) {
//				System.out.println(s);
				if(user.getAgegroup().getName().equals(survey.getTargetAge()) && s.equals(user.getPlace().getName())) {
					if(this.male==1 && user.getGender().getGender()==gen.Male) {
						System.out.println("mail--"+user.getMailId());
					}
					if(this.female==1 && user.getGender().getGender()==gen.Female) {
						System.out.println("mail--"+user.getMailId());
					}
					if(this.male==0 && this.female==0) {
						System.out.println("mail--"+user.getMailId());
					}
					
					}
			}
			
		}	
		return surveyRepository.save(survey);
	}
	public Users saveUsers(Users person) {
		if(person.getAge()<18 && person.getAge()>=1) {
			person.setAgegroup(new AgeGroup("1-18"));
		}
		if(person.getAge()<30 && person.getAge()>=18) {
			person.setAgegroup(new AgeGroup("18-30"));
		}
		if(person.getAge()<55 && person.getAge()>=30) {
			person.setAgegroup(new AgeGroup("30-55"));
		}
		if(person.getAge()<100 && person.getAge()>=55) {
			person.setAgegroup(new AgeGroup("55-100"));
		}
		
//		person.setGender(new Gender(gen.Male));
		return userRepository.save(person);
	}

	public List<String> nlp(String text) {
		Properties props = new Properties();
        props.setProperty("annotators", "tokenize, ssplit, pos, lemma, ner, parse, dcoref");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(props);
        
        Annotation document = new Annotation(text);

       
        pipeline.annotate(document);

        List<CoreMap> sentences = document.get(CoreAnnotations.SentencesAnnotation.class);
        List<String> location = new  ArrayList<String>();
        for (CoreMap sentence : sentences) {
            for (CoreLabel token : sentence.get(CoreAnnotations.TokensAnnotation.class)) {
                // this is the text of the token
                String word = token.get(CoreAnnotations.TextAnnotation.class);
                if(word.equalsIgnoreCase("male") || word.equalsIgnoreCase("boys")) {
                	this.male=1;
                }
                if(word.equalsIgnoreCase("female") || word.equalsIgnoreCase("girls")) {
                	this.female=1;
                }
                String pos = token.get(CoreAnnotations.PartOfSpeechAnnotation.class);
                String ne = token.get(CoreAnnotations.NamedEntityTagAnnotation.class);
                if(ne.equals("CITY") || ne.equals("LOCATION")) {
                	location.add(word);
                }
//            System.out.println(String.format("Print: word: [%s] ne: [%s]", word, ne));
            }
        }
		return location;
	}

	

	

	

}
