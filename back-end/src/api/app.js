const express = require('express');
const users = require('./controllers/userController');
const salesRouter = require('./routes/saleRouter');

const app = express();
app.use(express.json());

const accessControl = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

app.use(accessControl);

app.get('/coffee', (_req, res) => res.status(418).end());
app.get('/', (req, res) => res.json({ message: 'backed rodando' }));
app.get('/user', users);
app.use('/sales', salesRouter);

module.exports = app;
