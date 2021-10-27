CREATE TABLE department_user (
	user_id BIGSERIAL PRIMARY KEY NOT NULL,
    name varchar(255),
    email varchar(255),
    password varchar(255),
    enabled BOOLEAN,
    department_id BIGSERIAL
);