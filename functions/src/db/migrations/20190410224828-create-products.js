module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Products', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.STRING
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    thumb: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    state: {
      type:   Sequelize.ENUM,
      values: ['active', 'pending', 'hidden']
    },
    flag: {
      type:   Sequelize.ENUM,
      values: ['promo', 'featured']
    },
    image: {
      type: Sequelize.STRING,
    },
    rating: {
      type:   Sequelize.ENUM,
      values: ['1', '2', '3', '4', '5'],
    },
    prize: {
      type: Sequelize.DECIMAL,
      allowNull: false,
      defaultValue: 0.0
    },
    initial_prize: {
      type: Sequelize.DECIMAL,
      defaultValue: 0.0
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: queryInterface => queryInterface.dropTable('Products')
};
