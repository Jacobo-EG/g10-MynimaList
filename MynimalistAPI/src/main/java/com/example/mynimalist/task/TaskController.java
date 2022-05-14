package com.example.mynimalist.task;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mynimalist.common.ItemRequest;
import com.example.mynimalist.list.GetListResponse;
import com.example.mynimalist.list.List;
import com.example.mynimalist.list.ListService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping(path = "/add")
    public ResponseEntity<String> addTask(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String taskName = request.getName();
        Long listId = request.getId();

        return new ResponseEntity<>(taskService.saveTask(taskName, listId),HttpStatus.OK);
    }

    @PostMapping(path = "/get")
    public ResponseEntity<String> getTasks(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        Long listId = request.getId();

        java.util.List<Task> data = taskService.getTasks(listId);

        java.util.List<GetTaskResponse> response = new ArrayList<>();

        for ( Task l : data) {
            response.add(new GetTaskResponse(l.getId(), l.getName()));
        }

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping(path = "/delete")
    public ResponseEntity<String> deleteTask(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        Long taskId = request.getId();

        return new ResponseEntity<>(taskService.deleteTask(taskId),HttpStatus.OK);
    }

}
