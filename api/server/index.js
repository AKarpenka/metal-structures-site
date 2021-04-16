const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8888;

const app = express();

app.use(cors());

app.post('/callMe', (req, res) => {
    res.json({ message: 'Hello from server!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
