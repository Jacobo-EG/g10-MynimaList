package com.example.mynimalist.task;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mynimalist.common.ItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.example.mynimalist.common.JwtUtils.getDecodedJWT;

@CrossOrigin(origins = "http://mynimalist.herokuapp.com")
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

        getDecodedJWT(token);

        Long listId = request.getId();

        java.util.List<Task> data = taskService.getTasks(listId);

        java.util.List<GetTaskResponse> response = new ArrayList<>();

        for ( Task l : data) {
            response.add(new GetTaskResponse(l.getId(), l.getName(), l.getFinished()));
        }

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping(path = "/delete")
    public ResponseEntity<String> deleteTask(@RequestBody ItemRequest request) {

        String token = request.getToken();

        getDecodedJWT(token);

        Long taskId = request.getId();

        return new ResponseEntity<>(taskService.deleteTask(taskId),HttpStatus.OK);
    }

    @PostMapping(path = "/updatename")
    public ResponseEntity<String> updateNameTask(@RequestBody ItemRequest request) {

        String token = request.getToken();

        getDecodedJWT(token);

        Long taskId = request.getId();
        String newName = request.getName();

        return new ResponseEntity<>(taskService.updateNameTask(taskId, newName),HttpStatus.OK);
    }

    @PostMapping(path = "/updatestatus")
    public ResponseEntity<String> updateStatusTask(@RequestBody ItemRequest request) {

        String token = request.getToken();

        getDecodedJWT(token);

        Long taskId = request.getId();
        Boolean finished = request.getFinished();

        return new ResponseEntity<>(taskService.updateStatusTask(taskId, finished),HttpStatus.OK);
    }

}
