const express = require('express');
const { 
    getAllsales,
    createSaleHandler,
    getSaleByIdHandler,
     } = require('../controllers/salesController');
     
const { auth } = require('../middleware/auth');

const salesRouter = express.Router();

salesRouter.get('/sales', getAllsales)
 .post('/sales', auth, createSaleHandler)
 .get('/sales/:id', getSaleByIdHandler);
 
module.exports = salesRouter;
