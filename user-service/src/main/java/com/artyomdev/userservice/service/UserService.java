package com.artyomdev.userservice.service;

import com.artyomdev.userservice.entity.User;
import com.artyomdev.userservice.entity.dto.DepartmentDto;
import com.artyomdev.userservice.entity.dto.ResponseUserDto;
import com.artyomdev.userservice.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RestTemplate restTemplate;

    public ResponseUserDto getUserWithDepartment(long userId) {
        ResponseUserDto responseUserDto = new ResponseUserDto();
        User user = userRepository.findById(userId).orElse(null);
        if (Objects.nonNull(user)) {
            DepartmentDto departmentDto = restTemplate.getForObject("http://DEPARTMENT-SERVICE/api/departments/" +
                            user.getDepartmentId(), DepartmentDto.class);
            responseUserDto.setUser(user);
            responseUserDto.setDepartment(departmentDto);

            return responseUserDto;
        }

        return null;
    }

    public User saveDepartmentUserExample() {
        User user = new User(1);
        return userRepository.save(user);
    }

    public List<ResponseUserDto> getUsersWithDepartment() {
        List<User> users = userRepository.findAll();

        return users.stream().map(user -> getUserWithDepartment(user.getId())).collect(Collectors.toList());
    }

}
