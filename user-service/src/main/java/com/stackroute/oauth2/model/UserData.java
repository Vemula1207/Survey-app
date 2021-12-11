package com.stackroute.oauth2.model;




import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;




@Document(collection = "UserData")
public class UserData {
	@Id
	String email;
	String name;
	private UserRole role;
	
	
	public UserData() {
		super();
	}

	public UserData(String email, String name,UserRole role) {
		this.name = name;
		this.email = email;
		this.role=role;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public UserRole getRole() {
		return role;
	}

	public void setRole(UserRole role) {
		this.role = role;
	}
	
	


}
