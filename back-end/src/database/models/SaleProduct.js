function SaleProductModel (sequelize, DataTypes) {
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
    tableName: 'sales_products',
    timestamps: false,
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      through: SaleProduct,
      as: 'products',
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });

    models.Product.belongsToMany(models.Sale, {
      through: SaleProduct,
      as: 'sales',
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    });
  }
}