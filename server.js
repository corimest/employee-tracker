const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database 
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'JaneEyre',
  database: 'company_tracker'
});

// // API Routes
// // const apiRoutes = require('./routes/apiRoutes');

// //express
// const express = require('express');

// const app = express();

// //middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // app.use('/api', apiRoutes);


// // const cTable = require('console.table');
// // const { api } = require('./routes/apiRoutes');


connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
  mainMenu();
});

function mainMenu() {
  console.log('Welcome to the Employee Tracker');

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
    } else {
      connection.end()
    }
  })
}


function viewDepartments() {
  console.log('works')

  connection.query('SELECT * FROM departments', function (err, results) {
    if (err) throw err;

    console.table(results)

    mainMenu();
  });
}

//     .then(answer => {
//       if (answer.choice === 'View All Departments') { viewDepartments() };
//       //     console.log(answers); 
//       //     switch (answers) {
//       //         if 'View All Departments':
//       //             viewDepartments(); 
//       //         break; 
//       //     //     case 'View All Roles':
//       //     //         viewRoles(); 
//       //     //     break;
//       //     //     case 'View All Employees':
//       //     //         viewEmployees(); 
//       //     //     break;
//       //         case 'Add A Department':
//       //             addDepartment(); 
//       //         break;
//       //     //     case 'Add An Employee':
//       //     //         addEmployee(); 
//       //     //     break;
//       //     //     case 'Add A Role':
//       //     //         addRole(); 
//       //     //     break;
//       //     //     case 'Update An Employee':
//       //     //         updateEmployee(); 
//       //     //     break;
//       //     //     case 'Quit':
//       //     //         db.quit(); 
//       //     //     break;
//       //      }
//       // })
//       // }

//       // function addDepartment() {
//       //     inquirer.prompt(
//       //         {
//       //             type: 'input', 
//       //             name: 'departmentName', 
//       //             message: 'What is the name of this department?'
//       //         }
//       //     ).then (function(answers) {
//       //         console.log(answers); 
//       //     })
//       // }

//       // Default response for unsupported request (Not Found)
//       app.use((req, res) => {
//         res.status(404).end();
//       });
//     }
// };

// // Start server after DB connection
// // db.connect(err => {
// //     if (err) throw err;
// //     console.log('Database connected.');
// //     app.listen(PORT, () => {
// //       console.log(`Server running on port ${PORT}`);
// //     });
// //   });
