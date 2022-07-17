DROP DATABASE if exists company_tracker;
CREATE DATABASE company_tracker;
USE company_tracker;


CREATE TABLE departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    dept_name VARCHAR(30) NOT NULL 
);
CREATE TABLE roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY, 
    role_title VARCHAR(30) NOT NULL, 
    role_department VARCHAR(30) NOT NULL, 
    role_salary VARCHAR(30) NOT NULL
);
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    employee_role VARCHAR(30) NOT NULL, 
    department VARCHAR(30) NOT NULL, 
    salary VARCHAR(30) NOT NULL, 
    manager VARCHAR(30) NOT NULL
);