DROP TABLE IF EXISTS departments; 
DROP TABLE IF EXISTS employees; 
DROP TABLE IF EXISTS roles; 


CREATE TABLE departments (
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
    employee_id VARCHAR(30) NOT NULL, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    emp_role INTEGER, 
    department INTEGER, 
    salary INTEGER, 
    manager VARCHAR(30) NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (emp_role) REFERENCES roles(id) ON DELETE SET NULL, 
    CONSTRAINT fk_salary FOREIGN KEY (salary) REFERENCES roles(id) ON DELETE SET NULL 
);