package com.example.mynimalist;

import com.example.mynimalist.list.List;
import com.example.mynimalist.list.ListRepository;
import com.example.mynimalist.list.ListService;
import com.example.mynimalist.task.TaskService;
import com.example.mynimalist.user.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collection;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@SpringBootTest
public class ListServiceTest {

    @Mock
    private ListRepository listRepository;

    @Mock
    private TaskService taskService;

    @InjectMocks
    private ListService listService;

    private AutoCloseable autoCloseable;

    private User mockUser = new User();
    private final List RECORD = new List("listName", mockUser);
    private final List EXPECTED_RESULT = new List("newListName", mockUser);


    @BeforeEach
    void init(){
        autoCloseable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void testSaveList(){
        listService.saveList(RECORD);
        verify(listRepository).save(RECORD);
    }

    @Test
    void testGetLists(){
        listService.getLists(mockUser);
        verify(listRepository).findAllByUser(mockUser);
    }

    @Test
    void testDeleteList(){
        String result = listService.deleteList(mockUser.getId());
        verify(taskService).deleteAllTaskOfList(RECORD.getId());
        verify(listRepository).deleteById(mockUser.getId());
        assertEquals("Lista borrada correctamente",result);
    }

    @Test
    void testGetById(){
        listService.getById(RECORD.getId());
        verify(listRepository).getById(RECORD.getId());
    }

    @Test
    void testUpdateNameList(){
        when(listRepository.getById(RECORD.getId())).thenReturn(RECORD);
        when(listRepository.save(any(List.class))).thenReturn(EXPECTED_RESULT);
        List result = listService.updateNameList(RECORD.getId(), "newListName");
        assertNotNull(result);
        assertEquals("newListName", result.getName());
        assertEquals(RECORD.getId(), result.getId());
        assertEquals(RECORD.getUser(), result.getUser());
    }

}
