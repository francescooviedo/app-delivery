const express = require('express');
const { createSale } = require('../controllers/saleController');

const saleRouter = express.Router();

saleRouter.post(
  '/',
  createSale,
);

module.exports = saleRouter;
