package com.example.mynimalist;

import com.example.mynimalist.list.List;
import com.example.mynimalist.user.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class ListTest {

    private List list;

    @Mock
    private User mockUser;

    @BeforeEach
    void initList(){
        this.list = new List("listName", mockUser);
    }

    @Test
    void gettersTest(){
        assertEquals("listName", list.getName());
        assertEquals(mockUser, list.getUser());
        assertEquals(null, list.getId()); // List id should be null before adding to database
    }

    @Test
    void setName(){
        assertEquals("listName", list.getName());
        list.setName("newListName");
        assertEquals("newListName", list.getName());
    }

}
