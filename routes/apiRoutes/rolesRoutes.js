const express = require('express'); 
const router = express.Router(); 
const db = require('../../db/connection'); 

// View all roles
router.get('/roles', (req, res) => {
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
router.post('/roles', ({ body }, res) => { 
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

module.exports = router; 