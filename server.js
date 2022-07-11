//express
const express = require('express'); 
// MySQL2
const mysql = require('mysql2'); 

const PORT = process.env.PORT || 3001; 
const app = express(); 

//middleware
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 

// Connect to database 
const db = mysql.createConnection (
    {
        host: 'localhost', 
        user: 'root', 
        password: 'BelletheFrenchie2021!', 
        database: 'company_tracker'
    }, 
    console.log('Connected to company_tracker database')
)

// View all departments query 
app.get('/api/departments', (req, res) => {
    const sql = 'Select * FROM departments'; 

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: rows
        });
    }); 
});

// Add a department
app.post('/api/departments', ({ body }, res) => { 
    const sql = 'INSERT INTO departments (dept_name) VALUES (?)';
    const params = [body.dept_name];    
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: body
        }); 
    }); 
}); 

// View all roles
app.get('/api/roles', (req, res) => {
    const sql = 'SELECT * FROM roles';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: rows
        });
    });
});

// Add a role
app.post('/api/roles', ({ body }, res) => { 
    const sql = 'INSERT INTO roles (id, role_title, role_department, salary) VALUES (?,?,?,?)';
    const params = [body.id, body.role_title, body.role_department, body.salary];    
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: body
        }); 
    }); 
}); 

//View all employees
app.get('/api/employees', (req, res) => {
    const sql = 'SELECT employees.*, role_title, role_department, role_salary FROM employees LEFT JOIN roles ON employees.emp_role = roles.id;'; 

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: rows
        });
    });
});

// View single employee
app.get('/api/employee/:id', (req, res) => {
    const sql = 'SELECT employees.*, role_title, role_department, role_salary FROM employees LEFT join roles ON employees.emp_role = roles.id WHERE employees.id = ?;';
    const params = [req.params.id]; 

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: row
        });
    });
});

// Add an employee
app.post('/api/employees', ({ body }, res) => { 
    const sql = 'INSERT INTO employees (employee_id, first_name, last_name, emp_role, department, salary, manager) VALUES (?,?,?,?,?,?,?)';
    const params = [body.employee_id, body.first_name, body.last_name, body.emp_role, body.department, body.salary, body.manager];    
    
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message }); 
            return; 
        }
        res.json({
            message: 'success', 
            data: body
        }); 
    }); 
}); 

// Update an employee role 
app.put('/api/employee/:id', (req, res) => {
    const sql = 'UPDATE employees SET emp_role = ? WHERE id = ?'
    const params = [req.body.emp_role, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            // check for found record
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'success',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});




// Default response for unsupported request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//start Express.js server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });