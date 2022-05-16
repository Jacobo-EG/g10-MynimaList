package com.example.mynimalist.list;

import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;
import lombok.AllArgsConstructor;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.Map;


@Service
@AllArgsConstructor
public class ListService {

    private ListRepository listRepository;
    private TaskService taskService;

    public String saveList(List list) {
        listRepository.save(list);

        return "Lista guardada correctamente";
    }

    public java.util.List<List> getLists(User user){
        return listRepository.findAllByUser(user);
    }

    public String deleteList(Long id){
        taskService.deleteAllTaskOfList(id);
        listRepository.deleteById(id);
        return "Lista borrada correctamente";
    }

    public String renameList(Long id,String name){
        listRepository.getById(id).setName(name);
        return "Lista renombrada correctamente";
    }

    public List getListById(Long id){
        return listRepository.getById(id);
    }

}