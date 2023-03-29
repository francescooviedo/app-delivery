const express = require('express');
const saleController = require('../controllers/saleController');

const router = express.router();

router.post(
  '/',
  saleController.createSale,
);

module.exports = router;
