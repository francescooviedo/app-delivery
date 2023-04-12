const { SalesProduct, Product } = require('../../database/models');

const createSaleProduct = async (saleData) => {
    const saleproduct = await SalesProduct.bulkCreate(saleData);
    return { saleproduct };
  };
const getSaleProductById = async (saleId) => {
  const saleproduct = await SalesProduct.findAll({
    where: { saleId },
   include: { model: Product, attributes: ['name', 'price'] },
  });
  return saleproduct;
};
  module.exports = {
    createSaleProduct,
    getSaleProductById,
  };