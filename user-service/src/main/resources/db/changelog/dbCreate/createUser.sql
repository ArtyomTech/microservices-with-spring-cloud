CREATE TABLE department_user (
	department_user_id BIGSERIAL PRIMARY KEY NOT NULL,
    first_name varchar(255),
    last_name varchar(255),
    name varchar(255),
    email varchar(255),
    password varchar(255),
    department_id BIGSERIAL NOT NULL,
    CONSTRAINT department_fk FOREIGN KEY (department_id) REFERENCES department (department_id)
);