const { SalesProduct } = require('../../database/models');

const createSaleProduct = async (saleData) => {
    const saleproduct = await SalesProduct.bulkCreate(saleData);
    return { saleproduct };
  };

  module.exports = {
    createSaleProduct,
  };