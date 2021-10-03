package com.artyomdev.userservice.entity.dto;

import com.artyomdev.userservice.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ResponseUserDto {

    private User user;
    private DepartmentDto department;

}
