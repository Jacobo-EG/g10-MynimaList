package com.example.mynimalist;

import static org.junit.jupiter.api.Assertions.assertAll;

import javax.print.attribute.PrintRequestAttribute;

import com.example.mynimalist.task.Task;
import com.example.mynimalist.task.TaskService;

import org.junit.After;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

public class UserTest {
    private Task task;

    @Rule
	public ExpectedException excepcionEsperada = ExpectedException.none();

    @Before
    public void setup() throws Exception{
        task = new Task("prueba", null);
    }

    @After
    public void tearDown() throws Excpetion{
        task = null;
    }

    @Test
    public void nombreInicial(){ //Comprobar que el nombre inicial es el otorgado
        assertTrue("La tarea deberia haber sido finalizada",strcmp(task.getName(),"prueba"));
    }

    @Test
    public void tareaNoRealizadaInicialmente(){ //Inicialmente una tarea no puede haber sido completada
        assertFalse("La tarea no deberia estar finalizada",task.getFinished());
    }

    @Test
    public void tareaRealizada(){ //Una tarea ha sido completada
        task.setFinished(true);
        assertTrue("La tarea deberia haber sido finalizada",task.getFinished());
    }

}
