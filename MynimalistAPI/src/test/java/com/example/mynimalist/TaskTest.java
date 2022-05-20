package com.example.mynimalist;

import static org.springframework.test.util.AssertionErrors.assertFalse;
import static org.springframework.test.util.AssertionErrors.assertTrue;

import com.example.mynimalist.task.Task;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class TaskTest {
    private Task task;

    @BeforeEach
    public void setup() throws Exception{
        task = new Task("prueba", null);
    }

    @AfterEach
    public void tearDown() throws Exception{
        task = null;
    }

    @Test
    public void nombreInicial(){ //Comprobar que el nombre inicial es el otorgado
       assertTrue("La tarea no deberia haber cambiado de nombre",task.getName().equals("prueba"));
    }

    @Test
    public void tareaNoRealizadaInicialmente(){ //Inicialmente una tarea no puede haber sido completada

        assertFalse("La tarea no deberia haber sido finalizada",task.getFinished());
    }

    @Test
    public void tareaRealizada(){ //Una tarea ha sido completada
        task.setFinished(true);
        assertTrue("La tarea deberia haber sido finalizada",task.getFinished());
    }

}
