const express = require('express'); 
const router = express.Router(); 
const db = require('../../db/connection'); 

//View all employees
router.get('/employees', (req, res) => {
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
router.get('/employee/:id', (req, res) => {
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
router.post('/employees', ({ body }, res) => { 
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
router.put('/employee/:id', (req, res) => {
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

module.exports = router; 