package com.example.mynimalist.registration;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {

    private  final String username;
    private final String email;
    private final String password;
}
