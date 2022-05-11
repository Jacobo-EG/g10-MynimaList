package com.example.mynimalist.login;

import com.example.mynimalist.user.User;
import com.example.mynimalist.user.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class LoginService {

    private final UserService userService;

    public String login(LoginRequest request){
        return userService.login(new User(
                request.getUsername(),
                request.getEmail(),
                request.getPassword()
        ));
    }
}
