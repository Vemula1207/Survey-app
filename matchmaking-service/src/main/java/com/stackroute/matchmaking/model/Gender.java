package com.stackroute.matchmaking.model;

import org.apache.xerces.impl.XMLEntityManager;
import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import lombok.Data;
@NodeEntity
@Data
public class Gender {
	public enum gen{
		Male("male"),Female("female");
		String val;
		gen(String val) {
			this.val=val;
		}
	}
	@GraphId
	private gen gender;
	
	
	
	public Gender() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Gender(gen gender) {
		super();
		this.gender = gender;
	}
	public gen getGender() {
		return gender;
	}
	public void setGender(gen gender) {
		this.gender = gender;
	}
	

}
