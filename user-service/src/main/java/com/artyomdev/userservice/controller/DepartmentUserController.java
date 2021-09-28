package com.artyomdev.userservice.controller;

import com.artyomdev.userservice.entity.DepartmentUser;
import com.artyomdev.userservice.entity.dto.ResponseDepartmentUserDto;
import com.artyomdev.userservice.service.DepartmentUserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/users")
public class DepartmentUserController {

    private final DepartmentUserService departmentUserService;

    @GetMapping("/{id}")
    public ResponseDepartmentUserDto getUserWithDepartment(@PathVariable("id") long userId) {
        return departmentUserService.getUserWithDepartment(userId);
    }

    @PostMapping("/example")
    public DepartmentUser saveDepartmentUserExample() {
        return  departmentUserService.saveDepartmentUserExample();
    }


}
