package com.example.mynimalist;

import com.example.mynimalist.user.User;
import com.example.mynimalist.user.UserRepository;
import com.example.mynimalist.user.UserService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @InjectMocks
    private UserService userService;

    private AutoCloseable autoCloseable;
    private User RECORD = new User("username", "email", "password");

    @BeforeEach
    void setUp(){
        autoCloseable = MockitoAnnotations.openMocks(this);
    }

    @AfterEach
    void tearDown() throws Exception {
        autoCloseable.close();
    }

    @Test
    void testLoadUserByUsernameForExistingUsername(){
        Mockito.when(userRepository.findByUsername(RECORD.getUsername())).thenReturn(Optional.ofNullable(RECORD));
        UserDetails userDetails = userService.loadUserByUsername(RECORD.getUsername());
        assertSame(RECORD, userDetails);
    }

    @Test
    void testLoadUserByUsernameForNonExistingUsername(){
        Mockito.when(userRepository.findByUsername("nonExistingUsername")).thenReturn(Optional.empty());
        Exception e = assertThrows(UsernameNotFoundException.class, () -> userService.loadUserByUsername("nonExistingUsername"));
        assertEquals(String.format("User with username %s not found", "nonExistingUsername"), e.getMessage());
    }

    @Test
    void testRegisterExistingUser(){
        Mockito.when(userRepository.findByUsername(RECORD.getUsername())).thenReturn(Optional.ofNullable(RECORD));
        Exception e = assertThrows(IllegalStateException.class, () -> userService.register(RECORD));
        assertEquals("El usuario ya existe", e.getMessage());
    }

    @Test
    void testRegisterNewUser(){
        Mockito.when(userRepository.findByUsername(RECORD.getUsername())).thenReturn(Optional.empty());
        Mockito.when(userRepository.save(RECORD)).thenReturn(RECORD);
        Mockito.when(bCryptPasswordEncoder.encode(RECORD.getPassword())).thenReturn("encodedPassword");
        User user = userService.register(RECORD);
        assertEquals("encodedPassword", user.getPassword());
    }

    @Test
    void testGetUserByForNonExistingUsername(){
        Mockito.when(userRepository.findByUsername(RECORD.getUsername())).thenReturn(Optional.ofNullable(RECORD));
        assertEquals(RECORD, userService.getUserByUsername(RECORD.getUsername()));
    }

    @Test
    void testGetUserByUsernameForExistingUsername(){
        Mockito.when(userRepository.findByUsername(RECORD.getUsername())).thenReturn(Optional.empty());
        assertThrows(NoSuchElementException.class, () -> userService.getUserByUsername(RECORD.getUsername()));
    }

}
