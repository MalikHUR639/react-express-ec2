// Import required modules
const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3001; 

app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hello from backend API!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
