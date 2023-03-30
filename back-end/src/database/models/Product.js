const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: 'products',
      underscored:true
    }
    );
    return Product;
  };
  
  module.exports = ProductModel;
 // User.associate = (models) => {
    //   User.hasMaany(models.Sale,
    //     { foreignKey: 'user_id', as: 'sales' });
    // };