package com.stackroute.matchmaking.model;


import org.neo4j.ogm.annotation.GraphId;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;

import lombok.Data;

@NodeEntity
@Data
public class AgeGroup {

	@GraphId
	private String name;
//	private int startDate;
//	private int endDate;

	
	
	public AgeGroup() {
		super();
	}

	public AgeGroup(String name) {
		super();
		this.name = name;
//		this.endDate=e;
//		this.startDate=s;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

//	public int getEndDate() {
//		return endDate;
//	}
//
//	public void setEndDate(int endDate) {
//		this.endDate = endDate;
//	}
//
//	public int getStartDate() {
//		return startDate;
//	}
//
//	public void setStartDate(int startDate) {
//		this.startDate = startDate;
//	}
	
	
	
	
	
}
