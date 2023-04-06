const { Sale } = require('../../database/models');

const getAllSales = async () => {
    const product = await Sale.findAll();
  return product;
};

const createSale = async (saleData) => {
  const sale = await Sale.create(saleData);
  return { sale };
};

module.exports = {
    getAllSales,
    createSale,
  };