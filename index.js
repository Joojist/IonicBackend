const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware for JSON parsing and enabling CORS
app.use(bodyParser.json());
app.use(cors()); // Allows cross-origin requests from Angular frontend

// Set up a simple route to test connectivity
app.get('/', (req, res) => {
    res.send('Welcome to the Express Backend!');
});

// Endpoint to get a message (like a greeting)
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' }); // Return a message
});

// Endpoint to send a message (could be used to interact with the backend)
app.post('/api/send-message', (req, res) => {
    const { text } = req.body;
    console.log('Received message:', text); // Log the incoming message
    res.json({ message: `Received: ${text}` }); // Send a response
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
