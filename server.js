const { response } = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'JaneEyre',
  database: 'company_tracker'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Listening");
  mainMenu();
});

function mainMenu() {
  console.log('Thanks for using the Employee Tracker');

  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'Choose an option',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add A Department',
        'Add An Employee',
        'Add A Role',
        'Update An Employee',
        'Quit']
    }
  ]).then(answer => {
    if (answer.choice === 'View All Departments') {
      viewDepartments()
    } else if (answer.choice === 'View All Roles') {
      viewRoles()
    } else if (answer.choice === 'View All Employees') {
      viewEmployees()
    } else if (answer.choice === 'Add A Department') {
      addDepartment()
    } else if (answer.choice === 'Add An Employee') {
      addEmployee()
    } else if (answer.choice === 'Add A Role') {
      addRole()
    } else if (answer.choice === 'Update An Employee') {
      updateEmployee()
    } else {
      console.log('Goodbye!')
      connection.end()
    }
  })
}

// View All Departments
function viewDepartments() {
  console.log('All Departments')

  connection.query('SELECT * FROM departments', function (err, results) {
    if (err) throw err;

    console.table(results)

    mainMenu();
  });
}

//View All Roles
function viewRoles() {
  console.log('All Roles')

  connection.query('SELECT * FROM roles', function (err, results) {
    if (err) throw err;

    console.table(results)

    mainMenu();
  });
}

//View All Employees
function viewEmployees() {
  console.log('All Employees')

  connection.query('SELECT * FROM employees', function (err, results) {
    if (err) throw err;

    console.table(results)

    mainMenu();
  });
}

// Add A Department
function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this department?'
    }
  ]).then((res) => {
    const sql = 'INSERT INTO departments SET ?';

    connection.query(sql, { dept_name: res.name }, (err, res) => {
      if (err) throw err;

      console.table(res);

      mainMenu();
    })
  })
}

// Add An Employee 
function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: "What is the new employee's assigned employee ID?"
    },
    {
      type: 'input',
      name: 'first',
      message: "What is the new employee's first name"
    },
    {
      type: 'input',
      name: 'last',
      message: "What is the new employee's last name?"
    },
    {
      type: 'input',
      name: 'role',
      message: "What is this employee's role?"
    },
    {
      type: 'input',
      name: 'manager',
      message: "Who is the manager for this employee?"
    },
    {
      type: 'input',
      name: 'department',
      message: "What is the department for this employee?"
    },
    {
      type: 'input',
      name: 'salary',
      message: "What is the salary for this employee?"
    }
  ]).then((res) => {
    const sql = 'INSERT INTO employees SET ?';

    connection.query(sql, { employee_id: res.id, first_name: res.first, last_name: res.last, employee_role: res.role, manager: res.manager, department: res.department, salary: res.salary }, (err, res) => {
      if (err) throw err;

      console.table(res);

      mainMenu();
    })
  })
}

// Add A Role
function addRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of this role?'
    },
    {
      type: 'input',
      name: 'dept',
      message: 'What department does this role belong to?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this role?'
    }
  ]).then((res) => {
    const sql = 'INSERT INTO roles SET ?';

    connection.query(sql, { role_title: res.title, role_department: res.dept, role_salary: res.salary }, (err, res) => {
      if (err) throw err;

      console.table(res);

      mainMenu();
    })
  })
}

function updateEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'id',
      message: "Which employee do you want to update by typing the employee id?"
    }, 
    {
      type: 'input', 
      name: 'role', 
      message: "What is the employee's new role?"
    }, 
    {
      type: 'input', 
      name: 'dept', 
      message: "What is the employee's new department?"
    }, 
    {
      type: 'input', 
      name: 'salary', 
      message: "What is the employee's new salary?"
    }, 
    {
      type: 'input', 
      name: 'manager', 
      message: "Who is the employee's new manager?"
    }
  ]).then((res) => {
        
        connection.query('UPDATE `employees` SET employee_role = ?, department = ?, salary = ?, manager = ? WHERE employee_id = ?', [res.role, res.dept, res.salary, res.manager, res.id], (err, res) => {
          if (err) throw err; 

          console.table(res); 
          
          mainMenu();
        });
      }
  )}