package com.artyomdev.userservice.entity.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DepartmentDto {

    private long departmentId;
    private String departmentName;
    private String departmentAddress;
    private String departmentCode;

}
