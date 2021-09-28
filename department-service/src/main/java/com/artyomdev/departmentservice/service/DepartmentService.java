package com.artyomdev.departmentservice.service;

import com.artyomdev.departmentservice.entity.Department;
import com.artyomdev.departmentservice.repository.DepartmentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public Department findDepartmentById(long id) {
        return departmentRepository.findById(id).orElse(null);
    }

    public Department saveDepartmentExample() {
        Department department = new Department("lalala", "lalala");
        return departmentRepository.save(department);
    }

}
