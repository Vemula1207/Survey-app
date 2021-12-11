package com.stackroute.matchmaking.model;



import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import lombok.Data;
@NodeEntity
@Data
public class Users {

	@GraphId
	private String mailId;
	private String name;
	private int age;
	
	@Relationship(type = "gender", direction = Relationship.INCOMING)
	private Gender gender;
	
	
	@Relationship(type = "agegroup", direction = Relationship.INCOMING)
	private AgeGroup agegroup;
	
	@Relationship(type = "Belong to", direction = Relationship.INCOMING)
	private Place place;

	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Users(String mailId, String name, int age, Gender gender, AgeGroup agegroup, Place place) {
		super();
		this.mailId = mailId;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.agegroup = agegroup;
		this.place = place;
	}

	public String getMailId() {
		return mailId;
	}

	public void setMailId(String mailId) {
		this.mailId = mailId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public AgeGroup getAgegroup() {
		return agegroup;
	}

	public void setAgegroup(AgeGroup agegroup) {
		this.agegroup = agegroup;
	}

	public Place getPlace() {
		return place;
	}

	public void setPlace(Place place) {
		this.place = place;
	}

	
	
	

	
	
	
	
	
	
}


