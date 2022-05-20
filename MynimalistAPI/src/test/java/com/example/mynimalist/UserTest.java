package com.example.mynimalist;

import com.example.mynimalist.user.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class UserTest {

     User user;

    @BeforeEach
    void initUser(){
        this.user = new User("username", "email","password");
    }

    @Test
    void testGetters() {
        assertEquals("username", this.user.getUsername());
        assertEquals("email", this.user.getEmail());
        assertEquals("password", this.user.getPassword());
        assertEquals(null, user.getId()); // User id should be null before registration
        assertTrue(!user.getLocked());
        assertTrue(user.getEnabled());
    }

    @Test
    void testUsernameSetter(){
        assertEquals("username", this.user.getUsername());
        user.setUsername("usuario");
        assertEquals("usuario", this.user.getUsername());
    }

    @Test
    void testEmailSetter(){
        assertEquals("email", this.user.getEmail());
        user.setUsername("newEmail");
        assertEquals("newEmail", this.user.getUsername());
    }

    @Test
    void testPasswordSetter(){
        assertEquals("password", this.user.getPassword());
        user.setUsername("newPassword");
        assertEquals("newPassword", this.user.getUsername());
    }

    @Test
    void testAccountNonExpired(){
        assertTrue(user.isAccountNonExpired());
    }

    @Test
    void testCredentialsNonExpired(){
        assertTrue(user.isCredentialsNonExpired());
    }

    @Test
    void testEnabledAccount(){
        assertTrue(user.isEnabled());
    }

}
