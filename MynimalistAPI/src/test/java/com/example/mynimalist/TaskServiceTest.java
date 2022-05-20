package com.example.mynimalist;

import static org.junit.jupiter.api.Assertions.assertAll;

import javax.print.attribute.PrintRequestAttribute;

import com.example.mynimalist.list.List;
import com.example.mynimalist.task.Task;
import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;

import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.jupiter.api.TestClassOrder;
import org.junit.rules.ExpectedException;

public class TaskServiceTest {
    private Task task;
    private List list;
    private User user;
    private TaskService taskService;

    @Rule
	public ExpectedException excepcionEsperada = ExpectedException.none();

    @Before
    public void setup() throws Exception{
        user = new User("username", "email", "password");
        list = new List("list", user);
        task = new Task("prueba", list);
        taskService.saveTask(task.getName(), list.getId());
    }

    @After
    public void tearDown() throws Excpetion{
        user = null;
        list = null;
        task = null;
    }

    @Test
    public void tareaNoRealizadaInicialmente(){ //Inicialmente una tarea no puede haber sido completada
        assertFalse("La tarea no deberia estar finalizada",taskService.getTasks(list.getId())).get(0).getFinished();
    }

    @Test
    public void tareaRealizada(){ //Una tarea ha sido completada
        taskService.getTasks(list.getId())).get(0).setFinished(true);
        assertTrue("La tarea deberia haber sido finalizada",taskService.getTasks(list.getId()).get(0).getFinished());
    }
    
}
