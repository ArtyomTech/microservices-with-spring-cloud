package com.artyomdev.departmentservice.controller;

import com.artyomdev.departmentservice.entity.Department;
import com.artyomdev.departmentservice.service.DepartmentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/departments")
public class DepartmentController {

    private final DepartmentService departmentService;

    @GetMapping("/{id}")
    public Department findDepartmentById(@PathVariable("id") long departmentId) {
        return departmentService.findDepartmentById(departmentId);
    }

    @PostMapping("/example")
    public Department saveDepartmentExample() {
        return  departmentService.saveDepartmentExample();
    }

}
