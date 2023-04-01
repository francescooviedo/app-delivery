module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 3,
        total_price: 60.45,
        delivery_address: "Rua Campos Sales, Centro",
        delivery_number: "23",
        sale_date: new Date(),
        status: 'pendente'
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 3,
        total_price: 125.70,
        delivery_address: "Av. Oscar Bagattini, Santa Maria",
        delivery_number: "335",
        sale_date: new Date(),
        status: 'preparando'
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 3,
        total_price: 24.57,
        delivery_address: "Rua Juca Azevedo, Centro",
        delivery_number: "03",
        sale_date: new Date(),
        status: 'finalizado'
      },
    ])
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
