package com.artyomdev.userservice.service;

import com.artyomdev.userservice.entity.DepartmentUser;
import com.artyomdev.userservice.entity.dto.DepartmentDto;
import com.artyomdev.userservice.entity.dto.ResponseDepartmentUserDto;
import com.artyomdev.userservice.repository.DepartmentUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentUserService {

    private final DepartmentUserRepository departmentUserRepository;
    private final RestTemplate restTemplate;

    public ResponseDepartmentUserDto getUserWithDepartment(long userId) {
        ResponseDepartmentUserDto responseDepartmentUserDto = new ResponseDepartmentUserDto();
        DepartmentUser departmentUser = departmentUserRepository.findById(userId).orElse(null);
        if (Objects.nonNull(departmentUser)) {
            DepartmentDto departmentDto = restTemplate.getForObject("http://DEPARTMENT-SERVICE/departments/" +
                            departmentUser.getDepartmentId(), DepartmentDto.class);
            responseDepartmentUserDto.setDepartmentUser(departmentUser);
            responseDepartmentUserDto.setDepartment(departmentDto);

            return  responseDepartmentUserDto;
        }

        return null;
    }

    public DepartmentUser saveDepartmentUserExample() {
        DepartmentUser departmentUser = new DepartmentUser("Artyom", "Aralov", 1);
        return departmentUserRepository.save(departmentUser);
    }

    public List<ResponseDepartmentUserDto> getUsersWithDepartment() {
        List<DepartmentUser> users = departmentUserRepository.findAll();

        return users.stream().map(user -> getUserWithDepartment(user.getUserId())).collect(Collectors.toList());
    }

}
