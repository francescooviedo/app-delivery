const express = require('express');
const { createSale } = require('../controllers/saleController');
const handleTokenAuth = require('../middlewares/handleTokenAuth');

const saleRouter = express.Router();

saleRouter.post(
  '/',
  handleTokenAuth,
  createSale,
);

module.exports = saleRouter;
