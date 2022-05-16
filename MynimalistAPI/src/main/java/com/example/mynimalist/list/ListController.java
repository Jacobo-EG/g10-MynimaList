package com.example.mynimalist.list;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mynimalist.common.ItemRequest;
import com.example.mynimalist.user.User;
import com.example.mynimalist.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/list")
public class ListController {

    @Autowired
    private ListService listService;
    @Autowired
    private UserService userService;


    @PostMapping(path = "/add")
    public ResponseEntity<String> addList(@RequestBody ItemRequest request) {

        String token = request.getToken();
        String list_name = request.getName();


        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String username = decodedJWT.getSubject();

        User user = userService.getUserByUsername(username);

        return new ResponseEntity(listService.saveList(new List(list_name, user)), HttpStatus.OK);
    }

    @PostMapping (path = "/get")
    public ResponseEntity<String> getLists(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String username = decodedJWT.getSubject();

        User user = userService.getUserByUsername(username);

        java.util.List<List> data = listService.getLists(user);

        java.util.List<GetListResponse> response = new ArrayList<>();

        for ( List l : data) {
            response.add(new GetListResponse(l.getId(), l.getName()));
        }

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @PostMapping (path = "/delete")
    public ResponseEntity<String> deleteList(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        Long listId = request.getId();

        return new ResponseEntity<>(listService.deleteList(listId), HttpStatus.OK);
    }

    @PostMapping (path = "/rename")
    public ResponseEntity<String> renameList(@RequestBody ItemRequest request) {

        String token = request.getToken();

        String secret = "Secret_Key";
        Algorithm algorithm = Algorithm.HMAC256(secret.getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        DecodedJWT decodedJWT = verifier.verify(token);

        String name = request.getName();
        Long listId = request.getId();

        return new ResponseEntity<>(listService.renameList(listId,name), HttpStatus.OK);
    }

}
