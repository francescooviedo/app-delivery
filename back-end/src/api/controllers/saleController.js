const saleService = require('../services/saleService');

const createSale = async (req, res) => {
  const {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    status,
    cart,
  } = req.body;

  const { statusCode, message } = await saleService
    .createSale({
       userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
    }, cart);

  res.status(statusCode).json(message);
};

const findAll = async (_req, res) => {
  const { statusCode, message } = await saleService.findAll();

  res.status(statusCode).json(message);
};

module.exports = {
  createSale,
  findAll,
};
