package com.example.mynimalist.registration;

import com.example.mynimalist.user.User;
import com.example.mynimalist.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final UserService userService;

    @Transactional
    public User register(RegistrationRequest request){
        return userService.register(new User(
                request.getUsername(),
                request.getEmail(),
                request.getPassword()
        ));
    }
}
