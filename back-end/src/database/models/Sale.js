module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      }
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    totalPrice: DataTypes.INTEGER,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  }, {
    modelName: 'sales',
    timestamps: false,
    underscored: true
  });

  Sale.associate = ({ User, SaleProduct }) => {
    Sale.belongsTo(User, { foreignKey: 'user_id', as: 'user' }) 
    Sale.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' }) 
    Sale.hasMany(SaleProduct, { foreignKey: 'saleId', as: 'sale' })
  };

  return Sale;
};
