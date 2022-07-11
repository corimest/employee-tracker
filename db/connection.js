const mysql = require('mysql2'); 

// Connect to database 
const db = mysql.createConnection ({
        host: 'localhost', 
        user: 'root', 
        password: 'BelletheFrenchie2021!', 
        database: 'company_tracker'
}); 

module.exports = db; 