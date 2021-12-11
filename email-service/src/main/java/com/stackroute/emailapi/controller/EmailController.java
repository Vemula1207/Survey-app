package com.stackroute.emailapi.controller;

import com.stackroute.emailapi.model.Emailing;
import com.stackroute.emailapi.service.EmailService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin
//@Api(value = "email-service")
public class EmailController {

    @Autowired
    EmailService emailService;

    @PostMapping("/sendmail")
    public ResponseEntity<String> sendEmail(@RequestBody Emailing emailing){
        emailService.sendEmail(emailing);

//       emailService.sendEmail(emailing.getUrl(),emailing.getRecipients());
     //   System.out.println(emailing);
        return new ResponseEntity<String>("Sent !! ", HttpStatus.OK);
    }
}
