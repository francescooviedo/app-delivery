const express = require('express');
const { 
    getAllsales,
    createSaleHandler,
    getSaleByIdHandler,
    updateSaleStatusHandler,
     } = require('../controllers/salesController');
     
const { auth } = require('../middleware/auth');

const salesRouter = express.Router();

salesRouter.get('/sales', getAllsales)
 .post('/sales', auth, createSaleHandler)
 .get('/sales/:id', getSaleByIdHandler)
 .patch('/sales/:id', updateSaleStatusHandler);
 
module.exports = salesRouter;
