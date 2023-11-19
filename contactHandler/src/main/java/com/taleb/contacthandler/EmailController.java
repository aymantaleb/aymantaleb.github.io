package com.taleb.contacthandler;



// Importing required classes
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
public class EmailController {
    private static final Logger logger = LoggerFactory.getLogger(EmailController.class);

    @Autowired private EmailService emailService;

    @CrossOrigin(origins = "${CORS_URL}")
    @PostMapping("/sendMail")
    public Map<String, Object> sendMail(@RequestBody EmailDetails details)
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
