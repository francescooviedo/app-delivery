const express = require('express');
const productController = require('../controllers/productController');

const productRouter = express.Router();

const prId = '/products/:id';
// Get all products
productRouter.get('/products', productController.getAllProducts);

// Get a product by ID
productRouter.get(prId, productController.getProductById);

// Create a new product
productRouter.post('/products', productController.createProduct);

// Update an existing product
productRouter.put(prId, productController.updateProduct);

// Delete a product by ID
productRouter.delete(prId, productController.deleteProduct);

module.exports = productRouter;
