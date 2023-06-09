module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      allowNull: false, 
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      autoIncrement: true },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(4,2),
    }, 
    url_image: {
      allowNull: false,
      type: DataTypes.STRING,
      defaultValue: '',
    }, 
  },
  {
    timestamps: false,
    modelName: 'products',
    underscored:true
  }
  );
  Product.associate = ({ SalesProduct }) => {
    Product.hasMany(SalesProduct, { foreignKey: 'productId', as: 'productId' });
  }
  return Product;
};
