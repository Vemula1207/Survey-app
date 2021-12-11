package com.stackroute.oauth2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.stackroute.oauth2.model.UserData;
import com.stackroute.oauth2.model.UserRole;
import com.stackroute.oauth2.repository.MongoRepo;

@Service
public class Services {
	@Autowired
	private MongoRepo repo;
//	public UserData SaveUserData(String mail,String name) {
//		UserData userData
////		int flag=1;
////
////		List<UserData> users=repo.findAll();
////		for (UserData u:users) {
////			if(mail.equals(u.getEmail())) {
////				flag=0;
////			}
////
////		}
////		if(flag==1) {
////			return repo.save(new UserData(mail,name,UserRole.Desendent));
////		}
//
//
//	}
	public UserData getUserDetails(String email){
		Optional<UserData> userExist=repo.findById(email);
		if(userExist.isPresent()){
			return userExist.get();
		}
		else{
			return null;
		}
	}
	public UserData setAssessor(String email) {
		Optional<UserData> userExist =repo.findById(email);
		userExist.get().setRole(UserRole.Assessor);
		System.out.println(userExist.get().getRole());
		repo.save(userExist.get());
		return userExist.get();
	}
//	public String GetRole(String email){
//		List<UserData> users=repo.findAll();
//		for (UserData u:users) {
//			if(u.getEmail().equals(email)){
//				return u.getRole().toString();
//			}
//		}
//		return "Desendent";
//
//	}
	public UserData saveUser(UserData user){
		Optional<UserData> userExist =repo.findById(user.getEmail());
		if(userExist.isPresent()) {
			return null;
		}else {
			UserData userData= new UserData(user.getEmail(),user.getName(),UserRole.Assessor);
			return repo.save(userData);
		}
	}

}
