package com.artyomdev.userservice.repository;

import com.artyomdev.userservice.entity.DepartmentUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentUserRepository extends JpaRepository<DepartmentUser, Long> { }
