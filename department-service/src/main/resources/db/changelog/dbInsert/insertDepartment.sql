INSERT INTO department (department_id, department_name, department_address) VALUES (
    1, 'Pikk Party', 'Pikk 9-23'
);

INSERT INTO department (department_id, department_name, department_address) VALUES (
    2, 'Pikk Childhood', 'Pikk 5-7'
);

SELECT setval(pg_get_serial_sequence('department', 'department_id'), coalesce(max(department_id),0) + 1, false) FROM department;