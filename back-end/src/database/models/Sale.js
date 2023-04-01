const SaleModel = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    sellerId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'users',
        key: 'id',
      }
    },
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    }, {
      foreignKey: 'seller_id',
      as: 'user'
    }, );
  };

  return Sale;
};

module.exports = SaleModel;
