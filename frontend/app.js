const express = require('express');
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const response = await axios.post('http://backend:5000/submit', {
            name,
            email,
            message
        });
        res.send(`Backend Response: ${JSON.stringify(response.data)}`);
    } catch (error) {
        res.status(500).send('Error communicating with backend');
    }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));


