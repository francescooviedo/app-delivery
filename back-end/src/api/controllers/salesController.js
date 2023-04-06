const { getAllSales, createSale } = require('../services/salesService');
const { createSaleProduct } = require('../services/productSaleService');

const mocksaleproduct = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 2,
  },

];
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
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate,
        status } = req.body;
      const { sale } = await createSale({
        userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status });
        const arrAux = [];
        mocksaleproduct.forEach((product) => {
          arrAux.push({ saleId: sale.id,
            productId: product.productId,
            quantity: product.quantity,
             });
        });
       const saleProduct = await createSaleProduct(arrAux);
       return res.status(201).json({ sale, saleProduct });
    } catch (error) {
     return res.status(400).json({ error: error.message }); 
}
    };
  module.exports = {
    getAllsales,
    createSaleHandler,
  };
