const express = require('express');

const { getAllsales,
    createSaleHandler,
 } = require('../controllers/salesController');
const { auth } = require('../middleware/auth');

const salesRouter = express.Router();

salesRouter.get('/sales', getAllsales)
.post('/sales', auth, createSaleHandler);
module.exports = salesRouter;
