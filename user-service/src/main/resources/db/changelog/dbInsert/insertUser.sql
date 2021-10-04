INSERT INTO department_user (user_id, first_name, last_name, name, email, password, enabled, department_id) VALUES (
    1, 'Artyom', 'Aralov', 'Artyom Aralov', 'artyom.aralov@gmail.com', 'makaka', true, 1
);

SELECT setval(pg_get_serial_sequence('department_user', 'user_id'), coalesce(max(user_id),0) + 1, false) FROM department_user;