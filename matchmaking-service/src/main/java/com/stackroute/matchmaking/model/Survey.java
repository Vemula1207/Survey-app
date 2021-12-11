package com.stackroute.matchmaking.model;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.neo4j.ogm.annotation.*;

@NodeEntity
@Data
public class Survey {
	@GraphId
	private String name;

	private String domain;
	
	private String targetAge;
	private String description;

	public Survey(String name, String domain, String targetAge,String desc) {
		super();
		this.name = name;
		this.domain = domain;
		this.targetAge = targetAge;
		this.description=desc;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDomain() {
		return domain;
	}

	public void setDomain(String domain) {
		this.domain = domain;
	}

	public String getTargetAge() {
		return targetAge;
	}

	public void setTargetAge(String targetAge) {
		this.targetAge = targetAge;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
	
	
	
	
	
	
	
	
}
