package com.example.mynimalist.task;

import com.example.mynimalist.list.List;
import com.example.mynimalist.list.ListRepository;
import com.example.mynimalist.list.ListService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class TaskService {

    private TaskRepository taskRepository;
    private ListRepository listRepository;

    @Transactional
    public String saveTask(String taskName, Long listId){
        List list = listRepository.getById(listId);
        taskRepository.save(new Task(taskName, list));
        return "Tarea guardada correctamente";
    }

    @Transactional
    public String deleteTask(Long id){
        taskRepository.deleteById(id);
        return "Tarea eliminada correctamente";
    }

    @Transactional
    public void deleteAllTaskOfList(Long listId){
        List list = listRepository.getById(listId);
        taskRepository.deleteByList(list);
    }

    @Transactional(readOnly = true)
    public java.util.List<Task> getTasks(Long listId){
        List list = listRepository.getById(listId);
        return taskRepository.findAllByList(list);
    }

    @Transactional
    public String updateNameTask(Long taskId, String newName){
        Task taskToUpdate = taskRepository.getById(taskId);
        taskToUpdate.setName(newName);
        taskRepository.save(taskToUpdate);
        return "Nombre de la tarea modificada correctamente";
    }

    @Transactional
    public String updateStatusTask(Long taskId, Boolean finished){
        Task taskToUpdate = taskRepository.getById(taskId);
        taskToUpdate.setFinished(finished);
        taskRepository.save(taskToUpdate);
        return "Status de la tarea modificada correctamente";
    }
}
