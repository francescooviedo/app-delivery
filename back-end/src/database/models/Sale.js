const SaleModel = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId:{
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      sellerId:{
        type: DataTypes.INTEGER,
        foreignKey:true,
      },
      totalPrice: DataTypes.INTEGER,
      deliveryAddress:DataTypes.STRING,
      deliveryNumber:DataTypes.INTEGER,
      saleDate:DataTypes.DATE,
      
    },
    {
      timestamps: false,
      underscored:true
    }
    );
    Sale.associate = (models) => {
      Sale.belongsTo(models.User,
        { foreignKey: 'user_id', as: 'user' },
        { foreignKey: 'seller_id', as: 'user' },
        );
    };
  
    return Sale;
  };
  
  module.exports = SaleModel;
  