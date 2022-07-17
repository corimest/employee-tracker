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

INSERT INTO employees (employee_id, first_name, last_name, employee_role, department, salary, manager)
VALUES
  ('34', 'James', 'Fraser', 'Sales Team Member', 'Sales', '50,000', 'Clyde Watts'),
  ('35', 'Jack', 'London', 'Technician',  'IT', '80,000', 'Joey Fatone'),
  ('36', 'Robert', 'Bruce', 'OBGYN', 'Clinical', '127,000', 'Rachel Powers'),
  ('12', 'Charlotte', 'Bronte', 'CEO', 'Management', '200,000', 'None');