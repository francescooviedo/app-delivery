const { Product } = require('../../database/models');

const getAllProducts = async () => {
    const product = await Product.findAll();
  return product;
};

const getProductById = async (id) => {
    const product = await Product.findByPk(id);
  return product;
};

const createProduct = async (productData) => {
  const product = await Product.create(productData);
    return product;
};

const updateProduct = async (id, productData) => {
  const existingProduct = await Product.findByPk(id);
  if (existingProduct) {
    const product = await existingProduct.update(productData);
    return product;
  }
  return null;
};

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
