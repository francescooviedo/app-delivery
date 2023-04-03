const express = require('express');
const cors = require('cors');
const path = require('path');
const salesRouter = require('./Router/saleRouter');
const routes = require('./Router/userRoutes');
const productRouter = require('./Router/productRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve('./public')));

const accessControl = (_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
    res.header('Access-Control-Allow-Headers', '*');
    next();
};

app.use(accessControl);

app.use('/sales', salesRouter);
app.use(routes);
app.use(productRouter);

module.exports = app;
