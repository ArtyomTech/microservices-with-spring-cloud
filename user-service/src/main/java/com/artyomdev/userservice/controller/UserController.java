package com.artyomdev.userservice.controller;

import com.artyomdev.userservice.entity.User;
import com.artyomdev.userservice.entity.dto.ResponseUserDto;
import com.artyomdev.userservice.repository.UserRepository;
import com.artyomdev.userservice.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

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
