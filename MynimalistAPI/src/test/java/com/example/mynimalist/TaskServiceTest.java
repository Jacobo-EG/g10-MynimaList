package com.example.mynimalist;

import org.junit.jupiter.api.Assertions.*;


import com.example.mynimalist.list.List;
import com.example.mynimalist.task.Task;
import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.springframework.test.util.AssertionErrors.assertFalse;
import static org.springframework.test.util.AssertionErrors.assertTrue;

@SpringBootTest
public class TaskServiceTest {
    private Task task;
    private List list;
    private User user;
    private TaskService taskService;

    @BeforeEach
    public void setup(){
        user = new User("username", "email", "password");
        list = new List("list", user);
        task = new Task("prueba", list);
        taskService.saveTask(task.getName(), list.getId());
    }

    @AfterEach
    public void tearDown() throws Exception{
        user = null;
        list = null;
        task = null;
    }

    @Test
    public void nombreInicial(){ //Comprobar que el nombre inicial es el otorgado
        assertTrue("La tarea no deberia haber cambiado de nombre",taskService.getTasks(list.getId()).get(0).getName().equals("prueba"));
    }

    @Test
    public void cambiarNombre(){ //Comprobar que el nombre se ha cambiado
        taskService.updateNameTask(task.getId(), "nuevaprueba");
        assertTrue("La tarea deberia haber cambiado de nombre",taskService.getTasks(list.getId()).get(0).getName().equals("nuevaprueba"));
    }

    @Test
    public void tareaNoRealizadaInicialmente(){ //Inicialmente una tarea no puede haber sido completada
        assertFalse("La tarea no deberia estar finalizada",taskService.getTasks(list.getId()).get(0).getFinished());
    }

    @Test
    public void tareaRealizada(){ //Una tarea ha sido completada
        taskService.updateStatusTask(task.getId(), true); 
        assertTrue("La tarea deberia haber sido finalizada",taskService.getTasks(list.getId()).get(0).getFinished());
    }

    @Test
    public void comprobarQueSoloEstaEsaTareayQueEsLaInicial(){ //Una tarea ha sido completada
        ArrayList<Task> tareas = (ArrayList<Task>) taskService.getTasks(list.getId());
        assertTrue("Solo debe haber una tarea",tareas.size()==1);
        assertTrue("Deberia tener otro id",tareas.get(0).getId() == task.getId());
        assertTrue("Deberia tener otro nombre",tareas.get(0).getName().equals(task.getName()));
    }
    
}
