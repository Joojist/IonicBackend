const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Express Backend!');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
});

app.post('/api/send-message', (req, res) => {
    const { text } = req.body;
    console.log('Received message:', text);
    res.json({ message: `Received: ${text}` });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
