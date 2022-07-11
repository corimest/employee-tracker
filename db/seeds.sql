INSERT INTO departments (dept_name)
VALUES
('Sales'), 
('IT'), 
('Management'), 
('Clinical'); 

INSERT INTO roles (role_title, role_department, role_salary)
VALUES
('Sales Team Member', 'Sales', '50,000'), 
('Technician',  'IT', '80,000'), 
('CEO', 'Management', '200,000'), 
('OBGYN', 'Clinical', '127,000'); 

INSERT INTO employees (employee_id, first_name, last_name, emp_role, department, salary, manager)
VALUES
  ('34', 'James', 'Fraser', 1, 1, 1, 'Clyde Watts'),
  ('35', 'Jack', 'London', 2, 2, 2, 'Joey Fatone'),
  ('36', 'Robert', 'Bruce', 4, 4, 4, 'Rachel Powers'),
  ('12', 'Charlotte', 'Bronte', 3, 3, 3, 'None');