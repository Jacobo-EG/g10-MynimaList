package com.example.mynimalist.login;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "loginUser")
@AllArgsConstructor
public class LoginController {

   private final LoginService loginService;

   @GetMapping
   public ResponseEntity<String> login(@RequestBody LoginRequest request) {
      return new ResponseEntity(loginService.login(request), HttpStatus.OK);
   }

}
