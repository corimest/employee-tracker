DROP TABLE IF EXISTS employees; 
DROP TABLE IF EXISTS roles; 
DROP TABLE IF EXISTS departments; 

CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    dept_name VARCHAR(30) NOT NULL 
);
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    role_title VARCHAR(30) NOT NULL, 
    role_id VARCHAR(30) NOT NULL, 
    role_department VARCHAR(30) NOT NULL, 
    salary VARCHAR(30) NOT NULL 
);
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    employee_id VARCHAR(30) NOT NULL, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    job_title VARCHAR(30) NOT NULL, 
    department VARCHAR(30) NOT NULL, 
    salary VARCHAR(30) NOT NULL, 
    manager VARCHAR(30) NOT NULL 
);