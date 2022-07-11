const express = require('express'); 
const router = express.Router(); 
const db = require('../../db/connection'); 

// View all departments query 
router.get('/departments', (req, res) => {
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
router.post('/departments', ({ body }, res) => { 
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

module.exports = router; 