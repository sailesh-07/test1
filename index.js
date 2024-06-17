const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Hello World! This is my Express application.');
});

// POST route handler
app.post('/postendpoint', (req, res) => {
  const { name } = req.body; // Assuming the request body has a 'name' parameter
  if (!name) {
    return res.status(400).json({ error: 'Name parameter is required' });
  }
  res.json({ message: `Hello, ${name}! This is a POST request.` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});