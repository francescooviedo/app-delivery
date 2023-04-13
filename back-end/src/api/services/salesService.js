const { Sale, User } = require('../../database/models');

const getAllSales = async () => {
    const product = await Sale.findAll(
      {
        include: [
          { 
            model: User, 
            as: 'user', 
            attributes: ['name'], 
          },
          { 
            model: User, 
            as: 'seller', 
            attributes: ['name'], 
          },
        ],
      },
);
  return product;
};
const getSaleById = async (id) => {
  const sale = await Sale.findByPk(id, {
    include: [
      { 
        model: User, 
        as: 'user', 
        attributes: ['name'], 
      },
      { 
        model: User, 
        as: 'seller', 
        attributes: ['name'], 
      },
    ],
  });
  return sale;
};

const createSale = async (saleData) => {
  const sale = await Sale.create(saleData);
  return { sale };
};
const updateSaleStatus = async (id, status) => {
  const sale = await Sale.update(
    { status },
    { where: { id } },
  );
  return sale;
};
module.exports = {
    getAllSales,
    createSale,
    getSaleById,
    updateSaleStatus,
  };