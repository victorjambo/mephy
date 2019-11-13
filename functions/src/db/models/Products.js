const pushId = require('../../helpers/pushId');

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    thumb: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    state: {
      type:   DataTypes.ENUM,
      values: ['active', 'pending', 'hidden']
    },
    flag: {
      type:   DataTypes.ENUM,
      values: ['promo', 'featured']
    },
    image: {
      type: DataTypes.STRING,
    },
    rating: {
      type:   DataTypes.ENUM,
      values: ['1', '2', '3', '4', '5'],
    },
    prize: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    },
    initial_prize: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  }, {
    hooks: {
      beforeCreate: (member, _) => member.dataValues.id = pushId()
    }
  });
  return Products;
};
