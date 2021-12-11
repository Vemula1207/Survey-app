package com.stackroute.emailapi.service;

import com.stackroute.emailapi.model.Emailing;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;


@Service
public class EmailService {

    public void sendEmail(Emailing emailing) {
        String message=" <div align=\"left\" valign=\"top\" colspan=\"2\" style=\"margin:0;padding:25px 20px 5px 25px\" bgcolor=\"FFFFFF\">\n" +
                "    <p style=\"padding:0 0 0 0;margin:0;font-size:16px\"></p>\n" +
                "    <p style=\"line-height:18px;padding:0 0 20px 0;margin:0;color:#565656\"> Hi there !! <br> <br> " +
                "Please give your valuable time to fill out this survey and help others by your knolwledge and experience. <br><br>\n" +
                "        <div style=\"margin-left: 5%;\">\n" +
                "\n" +
                "            <button style=\" background-color:greenyellow;height:40px ; width: 200px;font-size: 20px;  border-radius: 5px;\">" +
                "<a href="+emailing.getLink() +" style=\"text-decoration: none;\">Fill now</a> </button>\n" +
                "        </div>\n" +
                "        \n" +
                "        \n" +
                "        <br> <br> Thanks, <br> SurveyGuru Team </p>\n" +
                "</div>";
               // " <button> <a href="+emailing.getLink()+">fill now</a> </button>";

      //  emailing.setMessage("Hi there!! Please use this survey link to fill the survey : "+ emailing.getLink());
      //  emailing.setCo(message);
        emailing.setMessage(message);
        String subject="Start taking survey";
        String fromEmail="surveyguru064@gmail.com";

        //Variable for gmail
        String host="smtp.gmail.com";

        //get the system properties
        Properties properties = System.getProperties();
     //   System.out.println("PROPERTIES "+properties);

        //setting important information to properties object

        //host set
        properties.put("mail.smtp.host", host);
        properties.put("mail.smtp.port","465");
        properties.put("mail.smtp.ssl.enable","true");
        properties.put("mail.smtp.auth","true");

        //Step 1: to get the session object..
        Session session=Session.getInstance(properties, new Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("surveyguru064@gmail.com", "Surveyguru@064");
            }



        });

        session.setDebug(true);

        //Step 2 : compose the message [text,multi media]
        MimeMessage mimeMessage = new MimeMessage(session);

        try {

            //from email
            mimeMessage.setFrom(fromEmail);

//            InternetAddress[] addresses=new InternetAddress[recipients.size()];
//            int count=0;
            for(String recipient: emailing.getRecipients()){
//                addresses[count]=new InternetAddress(recipient);
//                count++;
                mimeMessage.addRecipient(Message.RecipientType.BCC,new InternetAddress(recipient));
                //adding subject to message

            }

            //adding recipient to message
//            mimeMessage.addRecipients(Message.RecipientType.TO,addresses);



         //   System.out.println("Sent success..");
            mimeMessage.setSubject(subject);


            //adding text to message
           // mimeMessage.setText(emailing.getMessage());
         mimeMessage.setContent(emailing.getMessage(),"text/html");

            //send

            //Step 3 : send the message using Transport class
            Transport.send(mimeMessage);

        }catch (Exception e) {
            e.printStackTrace();
        }

    }
}



