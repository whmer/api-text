const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'dreqxy')));
app.use('/dreqxy', (req, res, next) => {
    console.log('sucess...')
    next();
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
