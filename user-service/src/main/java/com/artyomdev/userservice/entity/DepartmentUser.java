package com.artyomdev.userservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity(name = "department_user")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentUser {

    public DepartmentUser(String firstName, String lastName, long departmentId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.departmentId = departmentId;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "department_user_id")
    private long userId;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "department_id")
    private long departmentId;

}
