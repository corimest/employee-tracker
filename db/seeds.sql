INSERT INTO departments (dept_name)
VALUES
('Sales'), 
('IT'), 
('Management'), 
('Clinical'); 

INSERT INTO roles (role_title, role_id, role_department, salary)
VALUES
('Sales Team Member', '123', 'Sales', '50,000'), 
('Technician', '43', 'IT', '80,000'), 
('CEO', '12', 'Management', '200,000'), 
('OBGYN', '987', 'Clinical', '127,000'); 

INSERT INTO employees (employee_id, first_name, last_name, job_title, department, salary, manager)
VALUES
  ('34', 'James', 'Fraser', 'Sales Team Member', 'Sales', '50,000', 'Clyde Watts'),
  ('35', 'Jack', 'London', 'Technician', 'IT', '80,000', 'Joey Fatone'),
  ('36', 'Robert', 'Bruce', 'OBGYN', 'Clinical', '127,000', 'Rachel Powers');