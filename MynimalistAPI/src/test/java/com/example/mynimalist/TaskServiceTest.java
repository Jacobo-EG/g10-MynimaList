package com.example.mynimalist;

import com.example.mynimalist.list.ListRepository;
import com.example.mynimalist.task.TaskRepository;
import org.junit.jupiter.api.Assertions.*;
import java.util.*;


import com.example.mynimalist.list.List;
import com.example.mynimalist.task.Task;
import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.Optional;

import static org.springframework.test.util.AssertionErrors.assertFalse;
import static org.springframework.test.util.AssertionErrors.assertTrue;


public class TaskServiceTest {

    @Mock
    private List list;

    @Mock
    private ListRepository listRepository;
    @Mock
    private TaskRepository taskRepository;
    private Task task = new Task("prueba", list);

    private AutoCloseable autoCloseable;
    @InjectMocks
    private TaskService taskService;

    @BeforeEach
    public void setup(){
        autoCloseable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    public void tearDown() throws Exception{
        autoCloseable.close();
    }

    @Test
    public void tareaEstadoInicial(){ //Comprobar que el nombre inicial es el otorgado
        Mockito.when(listRepository.getById(list.getId())).thenReturn(list);
        java.util.List<Task> tareasLista = new ArrayList<Task>();
        tareasLista.add(task);
        Mockito.when(taskRepository.findAllByList(list)).thenReturn(tareasLista);

        assertTrue("La tarea no deberia haber cambiado de nombre",taskService.getTasks(list.getId()).get(0).getName().equals(task.getName()));
        assertFalse("La tarea no deberia estar finalizada",taskService.getTasks(list.getId()).get(0).getFinished());
    }

    @Test
    public void cambiarNombre(){ //Comprobar que el nombre se ha cambiado
        Mockito.when(taskRepository.getById(task.getId())).thenReturn(task);
        Mockito.when(taskRepository.save(task)).thenReturn(task);

        assertTrue("La tarea deberia haber cambiado de nombre",taskService.updateNameTask(task.getId(),"nombreNuevo").equals("Nombre de la tarea modificada correctamente"));
    }

    @Test
    public void tareaRealizada(){ //Una tarea ha sido completada
        Mockito.when(listRepository.getById(list.getId())).thenReturn(list);
        java.util.List<Task> tareasLista = new ArrayList<Task>();
        tareasLista.add(task);
        Mockito.when(taskRepository.findAllByList(list)).thenReturn(tareasLista);
        Mockito.when(taskRepository.getById(task.getId())).thenReturn(task);

        taskService.updateStatusTask(task.getId(), true);

        assertTrue("La tarea deberia haber sido finalizada",taskService.getTasks(list.getId()).get(0).getFinished());
    }

    @Test
    public void comprobarQueSoloEstaEsaTareayQueEsLaInicial(){ //Una tarea ha sido completada
        Mockito.when(listRepository.getById(list.getId())).thenReturn(list);
        java.util.List<Task> tareasLista = new ArrayList<Task>();
        tareasLista.add(task);
        Mockito.when(taskRepository.findAllByList(list)).thenReturn(tareasLista);

        java.util.List<Task> tareas = (ArrayList<Task>) taskService.getTasks(list.getId());

        assertTrue("Solo debe haber una tarea",tareas.size()==1);
        assertTrue("Deberia tener otro id",tareas.get(0).getId() == task.getId());
        assertTrue("Deberia tener otro nombre",tareas.get(0).getName().equals(task.getName()));
    }
    
}
