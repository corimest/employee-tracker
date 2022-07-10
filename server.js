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

//View all employees
app.get('/api/employees', (req, res) => {
    const sql = 'SELECT * FROM employees'; 

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

// Add an employee
app.post('/api/employees', ({ body }, res) => { 
    const sql = 'INSERT INTO employees (employee_id, first_name, last_name, job_title, department, salary, manager) VALUES (?,?,?,?,?,?,?)';
    const params = [body.employee_id, body.first_name, body.last_name, body.job_title, body.department, body.salary, body.manager];    
    
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


// Default response for unsupported request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//start Express.js server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });