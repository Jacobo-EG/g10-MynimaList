package com.example.mynimalist.task;

import com.example.mynimalist.list.List;
import com.example.mynimalist.list.ListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private ListRepository listRepository;

    public String saveTask(String taskName, Long listId){
        List list = listRepository.getById(listId);
        taskRepository.save(new Task(taskName, list));
        return "Tarea guardada correctamente";
    }

    public String deleteTask(Long id){
        taskRepository.deleteById(id);
        return "Tarea eliminada correctamente";
    }

    public void deleteAllTaskOfList(Long listId){
        List list = listRepository.getById(listId);
        taskRepository.deleteAllByList(list);
    }

    public java.util.List<Task> getTasks(Long listId){
        List list = listRepository.getById(listId);
        return taskRepository.findAllByList(list);
    }

}
