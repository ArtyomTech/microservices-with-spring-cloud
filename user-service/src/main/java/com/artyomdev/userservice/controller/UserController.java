package com.artyomdev.userservice.controller;

import com.artyomdev.userservice.config.JwtTokenProvider;
import com.artyomdev.userservice.entity.User;
import com.artyomdev.userservice.entity.dto.ResponseUserDto;
import com.artyomdev.userservice.entity.dto.UserDto;
import com.artyomdev.userservice.repository.UserRepository;
import com.artyomdev.userservice.service.CustomUserDetailsService;
import com.artyomdev.userservice.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@AllArgsConstructor
@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final CustomUserDetailsService customUserDetailsService;

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody UserDto data) {
        try {
            String username = data.getEmail();
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            String token = jwtTokenProvider.createToken(username, userRepository.findByEmail(username).getRoles());
            Map<Object, Object> model = new HashMap<>();
            model.put("username", username);
            model.put("token", token);

            return ok(model);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid email/password supplied");
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) {
        User userByEmail = customUserDetailsService.findUserByEmail(user.getEmail());
        if (userByEmail != null) {
            throw new BadCredentialsException("User with username: " + user.getEmail() + " already exists");
        }

        customUserDetailsService.saveUser(user);
        Map<Object, Object> model = new HashMap<>();
        model.put("message", "User registered successfully");

        return ok(model);
    }

    @GetMapping("/{id}")
    public ResponseUserDto getUserWithDepartment(@PathVariable("id") long userId) {
        return userService.getUserWithDepartment(userId);
    }

    @GetMapping
    public List<ResponseUserDto> getUsers() {
        return userService.getUsersWithDepartment();
    }

    @PostMapping("/example")
    public User saveDepartmentUserExample() {
        return  userService.saveDepartmentUserExample();
    }

}
