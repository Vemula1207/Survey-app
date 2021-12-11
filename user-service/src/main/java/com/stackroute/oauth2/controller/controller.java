package com.stackroute.oauth2.controller;

import com.stackroute.oauth2.model.UserRole;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import com.stackroute.oauth2.model.UserData;
import com.stackroute.oauth2.repository.MongoRepo;
import com.stackroute.oauth2.service.Services;
import org.springframework.web.servlet.view.RedirectView;

import java.security.Principal;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@RestController
//@Api(value = "user-service")
@RequestMapping(value = "/api/v1")
public class controller {
	@Autowired
	private MongoRepo detail;
	@Autowired
	private Services userService;

    @GetMapping("/callback")
    public RedirectView callback(@RequestParam String state, @RequestParam String code) {
        System.out.println(state);
        RedirectView redirectView = new RedirectView();
        String url = "https://surveyguru.stackroute.io/#/callback?state="+state+"&code="+code;
        redirectView.setUrl(url);
        return redirectView;
    }
	
    @GetMapping( "/home" )
    public ResponseEntity<?> getUserName(@AuthenticationPrincipal( expression = "attributes['email']" ) String mailId, @AuthenticationPrincipal(expression = "attributes['name']" ) String name) {
        System.out.println("console"+mailId);
        UserData userInfo = userService.getUserDetails(mailId);
        HashMap<String,String> user=new HashMap<>();
        user.put("mailId",mailId);
        user.put("name",name);
        if(userInfo==null){
            UserData userData= new UserData(mailId,name, UserRole.Desendent);
            detail.save(userData);
            user.put("userRole",UserRole.Desendent.toString());
        }
        else{
            user.put("userRole",userInfo.getRole().toString());
        }

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
//    @GetMapping( "/get/email" )
//    public Map<String, String> getEmail( @AuthenticationPrincipal( expression = "attributes['email']" ) String mailId,@AuthenticationPrincipal(expression = "attributes['name']" ) String name) {
//
//        return Collections.singletonMap("email", mailId);
//    }
    @PutMapping("/register")
    public UserData setUserRole(@RequestBody String email ) {
        System.out.println("user"+email);
    	return userService.setAssessor(email);
    	
    }

    @PostMapping("/register")
    public UserData saveUser(@RequestBody UserData user ) {
        return userService.saveUser(user);

    }

}
