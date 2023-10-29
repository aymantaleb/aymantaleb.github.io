package com.taleb.contacthandler;

import lombok.*;

@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class emailDetails {

    @Setter
    private String recipient;

    @Setter
    private String msgBody;

    @Setter
    private String subject;


}
