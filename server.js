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
db.query('Select * FROM departments', (err, rows) => {
    if (err) {
        console.log(err); 
    }
    console.log(rows); 
})

//View all roles
db.query('SELECT * FROM roles', (err, rows) => {
    if (err) {
        console.log(err); 
    }
    console.log(rows); 
})

//View all employees
db.query('SELECT * FROM employees', (err, rows) => {
    if (err) {
        console.log(err); 
    }
    console.log(rows); 
})

// Add an employee
const sql = 'INSERT INTO employees (id, employee_id, first_name, last_name, job_title, department, salary, manager) VALUES (?,?,?,?,?,?,?,?)';
const params = [5, 768, 'Charlotte', 'Bronte', 'Technician', 'IT', '80,000', 'Joey Fatone']; 

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }
    console.log(result); 
}); 

// Default response for unsupported request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//start Express.js server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });