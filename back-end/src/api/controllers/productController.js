const productService = require('../services/productService');

// Get all products
const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
};

// Get a product by ID
const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found by id' });
  }
};

// Create a new product
const createProduct = async (req, res) => {
  const product = await productService.createProduct(req.body);
  res.status(201).json(product);
};

// Update an existing product
const updateProduct = async (req, res) => {
  const product = await productService.updateProduct(req.params.id, req.body);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  const result = await productService.deleteProduct(req.params.id);
  if (result) {
    res.sendStatus(204);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
