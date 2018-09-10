const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

const port = process.env['NODE_ENV'] === 'production' ? 80 : 3000;

app.listen(port, () => console.log('Listening on port:', port));