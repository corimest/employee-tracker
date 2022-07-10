const express = require('express'); 

const PORT = process.env.PORT || 3001; 
const app = express(); 

//middleware
app.use(express.urlencoded({ extended: false })); 
app.use(express.json()); 



// Default response for unsupported request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

//start Express.js server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });