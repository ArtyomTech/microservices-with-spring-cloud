INSERT INTO role (role_id, role) VALUES (
    1, 'ROLE_USER',
);

SELECT setval(pg_get_serial_sequence('role', 'role_id'), coalesce(max(role_id),0) + 1, false) FROM role;