
 

'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      sale_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        }
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        }
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales_products');
  }
};