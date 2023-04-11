const { getCurrentDateTime } = require('../utils/currentTime');

const { getAllSales, createSale } = require('../services/salesService');
const { createSaleProduct } = require('../services/productSaleService');
const { verifyToken } = require('../utils/cryptoJWT');

const getAllsales = async (req, res) => {
    try {
        const sales = await getAllSales();
   return res.status(200).json(sales);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
  };
  const createSaleHandler = async (req, res) => {
    try { 
          const { 
          sellerId, totalPrice, deliveryAddress, deliveryNumber,
          status, products } = req.body;
          const { authorization } = req.headers;
          const userId = await verifyToken(authorization);
          const saleDate = getCurrentDateTime();
          const { sale } = await createSale({
          userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
          const newArr = products.map((product) => ({ 
          saleId: sale.id, productId: product.id, quantity: product.quantity }));
          await createSaleProduct(newArr);
       return res.status(201).json(sale.id);
    } catch (error) {
     return res.status(400).json({ error: error.message }); 
}
    };
  module.exports = {
    getAllsales,
    createSaleHandler,
  };
