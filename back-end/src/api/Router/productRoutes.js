const express = require('express');
const productController = require('../controllers/productController');
const { auth } = require('../middleware/auth');

const productRouter = express.Router();

const prId = '/products/:id';
productRouter.get('/products', auth, productController.getAllProducts)
.get(prId, productController.getProductById)
 .post('/products', productController.createProduct)
  .put(prId, productController.updateProduct)
   .delete(prId, productController.deleteProduct);

module.exports = productRouter;
