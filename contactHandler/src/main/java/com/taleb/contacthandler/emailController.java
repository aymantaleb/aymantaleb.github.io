package com.taleb.contacthandler;



// Importing required classes
import com.taleb.contacthandler.emailDetails;
import com.taleb.contacthandler.emailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
public class emailController {
    private static final Logger logger = LoggerFactory.getLogger(emailController.class);

    @Autowired private emailService emailService;

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/sendMail")
    public Map<String, Object> sendMail(@RequestBody emailDetails details)
    {
        Map<String, Object> response = new HashMap<>();
        logger.info("Received email request: {}", details);
        String result = emailService.sendSimpleMail(details);
        response.put("status", result);
        response.put("emailDetails", details);
        logger.info("Email request processed. Response: {}", response);
        return response;
    }


}
