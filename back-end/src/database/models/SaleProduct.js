module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      primaryKey: true,
      references: {
        model: 'sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
    }
  }, {
    modelName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

SalesProduct.associate = ({ Sale, Product} ) => {
  SalesProduct.belongsTo(Sale, { foreignKey: 'saleId' });
  SalesProduct.belongsTo(Product, { foreignKey: 'productId' });
  }
  return SalesProduct;
}