module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
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

 SaleProduct.associate = ({ Sale, Product} ) => {
  SaleProduct.belongsTo(Sale, { foreignKey: 'saleId' });
  SaleProduct.belongsTo(Product, { foreignKey: 'productId' });
  }
  return SaleProduct;
}
