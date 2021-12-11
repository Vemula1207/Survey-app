package com.stackroute.emailapi.model;

import lombok.*;

import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Emailing {
    String message;
    List<String> recipients;
    String link;

}
