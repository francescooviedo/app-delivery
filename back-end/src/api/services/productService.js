const { Product } = require('../../database/models');

// Get all products
const getAllProducts = async () => {
    const product = await Product.findAll();
  return product;
};

// Get a product by ID
const getProductById = async (id) => {
    const product = await Product.findByPk(id);
  return product;
};

// Create a new product
const createProduct = async (productData) => {
  const product = await Product.create(productData);
    return product;
};

// Update an existing product
const updateProduct = async (id, productData) => {
  const existingProduct = await Product.findByPk(id);
  if (existingProduct) {
    const product = await existingProduct.update(productData);
    return product;
  }
  return null;
};

// Delete a product by ID
const deleteProduct = async (id) => {
  const existingProduct = await Product.findByPk(id);
  if (existingProduct) {
    const product = await existingProduct.destroy();
    return product;
  }
  return null;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
