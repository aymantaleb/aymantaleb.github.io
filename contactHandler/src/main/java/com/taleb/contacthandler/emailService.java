package com.taleb.contacthandler;

import com.taleb.contacthandler.emailDetails;
import org.springframework.stereotype.Service;

@Service
public interface emailService {
    String sendSimpleMail(emailDetails details);

    // Method
    // To send an email with attachment
    String sendMailWithAttachment(emailDetails details);
}
