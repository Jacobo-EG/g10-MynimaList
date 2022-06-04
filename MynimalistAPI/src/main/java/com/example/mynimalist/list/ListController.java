package com.example.mynimalist.list;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.mynimalist.common.ItemRequest;
import com.example.mynimalist.user.User;
import com.example.mynimalist.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

import static com.example.mynimalist.common.JwtUtils.getDecodedJWT;

@CrossOrigin(origins = "http://mynimalist.herokuapp.com")
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


        DecodedJWT decodedJWT = getDecodedJWT(token);

        String username = decodedJWT.getSubject();

        User user = userService.getUserByUsername(username);
        listService.saveList(new List(list_name, user));

        return new ResponseEntity("Lista guardada correctamente", HttpStatus.OK);
    }

    @PostMapping (path = "/get")
    public ResponseEntity<String> getLists(@RequestBody ItemRequest request) {

        String token = request.getToken();

        DecodedJWT decodedJWT = getDecodedJWT(token);

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

        getDecodedJWT(token);

        Long listId = request.getId();

        return new ResponseEntity<>(listService.deleteList(listId), HttpStatus.OK);
    }

    @PostMapping (path = "/updatename")
    public ResponseEntity<String> updateNameList(@RequestBody ItemRequest request) {

        String token = request.getToken();

        getDecodedJWT(token);

        Long listId = request.getId();
        String newName = request.getName();

        listService.updateNameList(listId, newName);
        return new ResponseEntity<>("Nombre de la lista modificado correctamente", HttpStatus.OK);
    }

}
