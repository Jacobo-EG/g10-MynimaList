package com.example.mynimalist;

import com.example.mynimalist.user.User;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collection;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class UserTest {

    private AutoCloseable autoCloseable;

    @InjectMocks
    private User user;

    @BeforeEach
    void setUp(){
        autoCloseable = MockitoAnnotations.openMocks(this);

        user = new User("username", "email", "password");
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void testGetters() {
        assertEquals("username", this.user.getUsername());
        assertEquals("email", this.user.getEmail());
        assertEquals("password", this.user.getPassword());
        assertEquals(null, user.getId()); // User id should be null before registration
        assertEquals(null, user.getListas());
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
        user.setEmail("newEmail");
        assertEquals("newEmail", this.user.getEmail());
    }

    @Test
    void testPasswordSetter(){
        assertEquals("password", this.user.getPassword());
        user.setPassword("newPassword");
        assertEquals("newPassword", this.user.getPassword());
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

    @Test
    void testIsAccountNonLocked(){
        assertEquals(!user.getLocked(), user.isAccountNonLocked());
    }

    @Test
    void testGetAuthorities(){
        assertEquals(Collections.singletonList(new SimpleGrantedAuthority("USER")), user.getAuthorities());
    }

}
