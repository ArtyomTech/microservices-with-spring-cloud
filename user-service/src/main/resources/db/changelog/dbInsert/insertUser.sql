INSERT INTO department_user (department_user_id, first_name, last_name, department_id) VALUES (
    1, 'Artyom', 'Aralov', 1
);

SELECT setval(pg_get_serial_sequence('department_user', 'department_user_id'), coalesce(max(department_user_id),0) + 1, false) FROM department_user;