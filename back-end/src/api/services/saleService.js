const { Sale, SaleProduct } = require('../../database/models');
const statusCodes = require('../utils/statusCodes');

const createSale = async (saleInfo, cart) => {
  const newSale = await Sale.create({
     ...saleInfo,
     totalPrice: Number(saleInfo.totalPrice.toString().replace(',', '.')) });

  const formatCart = cart.map((product) => ({
      saleId: newSale.id,
      productId: product.id,
      quantity: product.quantity,
    }));

  await SaleProduct.create(formatCart);
  
  return { statusCode: statusCodes.CREATED, message: newSale };
};

const findAll = async () => {
  const allSales = await Sale.findAll();

  return { statusCode: statusCodes.OK, message: allSales };
};

module.exports = {
  createSale,
  findAll,
};