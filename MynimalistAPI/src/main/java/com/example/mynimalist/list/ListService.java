package com.example.mynimalist.list;

import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;


@Service
public class ListService {

    @Autowired
    private ListRepository listRepository;
    @Autowired
    private TaskService taskService;

    @Transactional
    public List saveList(List list) {
        return listRepository.save(list);
    }

    @Transactional(readOnly = true)
    public java.util.List<List> getLists(User user){
        return listRepository.findAllByUser(user);
    }

    @Transactional
    public String deleteList(Long id){
        taskService.deleteAllTaskOfList(id);
        listRepository.deleteById(id);
        return "Lista borrada correctamente";
    }

    @Transactional(readOnly = true)
    public List getById(Long id){
        return listRepository.getById(id);
    }

    @Transactional
    public List updateNameList(Long id, String newName) {
        List listToUpdate = listRepository.getById(id);
        listToUpdate.setName(newName);
        return listRepository.save(listToUpdate);
    }

}