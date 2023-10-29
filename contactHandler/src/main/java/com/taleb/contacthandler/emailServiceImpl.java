package com.taleb.contacthandler;

import com.taleb.contacthandler.emailDetails;
import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;


@Service
public class emailServiceImpl implements emailService {
    private final JavaMailSender javaMailSender;
    private final String sender;

    @Autowired
    public emailServiceImpl(JavaMailSender javaMailSender, @Value("${spring.mail.username}") String sender) {
        this.javaMailSender = javaMailSender;
        this.sender = sender;
    }
    public String sendSimpleMail(emailDetails details) {
        try {

            // Creating a simple mail message
            SimpleMailMessage mailMessage
                    = new SimpleMailMessage();

            // Setting up necessary details
            mailMessage.setFrom(sender);
            mailMessage.setTo(details.getRecipient());
            mailMessage.setText(details.getMsgBody());
            mailMessage.setSubject(details.getSubject());

            // Sending the mail
            javaMailSender.send(mailMessage);
            return "success";
        }

        // Catch block to handle the exceptions
        catch (Exception e) {
            return "error";
        }
    }

    @Override
    public String sendMailWithAttachment(emailDetails details) {
        return null;
    }


}
