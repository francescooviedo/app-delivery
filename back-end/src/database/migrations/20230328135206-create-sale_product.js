'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sale_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'sale_id',
          references:{
              model: 'sales',
              key: 'id',
              }
      },
      product_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
          field: 'product_id',
          references:{
              model: 'products',
              key: 'id',
              }
      },
      quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
      }
      // sellerId:{
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE',
      //   field: 'user_id',
      //   references:{
      //   model: 'users',
      //   key: 'id',
      //   }
      // },
      // createdAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      //   defaultValue: "2012-3-23",
      // },
      // updatedAt: {
      //   allowNull: false,
      //   type: Sequelize.DATE,
      //   defaultValue: "2012-3-23",
      // }
    });
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
