package com.artyomdev.departmentservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@RequiredArgsConstructor
public class Department {

    public Department(String departmentName, String departmentAddress) {
        this.departmentName = departmentName;
        this.departmentAddress = departmentAddress;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="department_id", unique=true, nullable=false)
    private long departmentId;

    @Column(name="department_name")
    private String departmentName;

    @Column(name="department_address")
    private String departmentAddress;

}
