package com.artyomdev.userservice.entity.dto;

import com.artyomdev.userservice.entity.DepartmentUser;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDepartmentUserDto {

    private DepartmentUser departmentUser;
    private DepartmentDto department;

}
