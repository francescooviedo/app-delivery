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
    },
    sellerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'seller_id'
    },
    totalPrice: {
      allowNull: false,
      type: DataTypes.DECIMAL(9,2),
      field: 'total_price',
    },
    delivery_address: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_address',
    },
    delivery_number:{
      allowNull: false,
      type: DataTypes.STRING,
      field: 'delivery_number',
    }, 
    saleDate: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'sale_date',
    }, 
    status: {
      allowNull: false,
      type: DataTypes.STRING,
    }, 
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
