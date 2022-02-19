// @ts-check

const sequelize = require('sequelize');

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('Sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cities', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.addColumn('users', 'cityId', {
      type: sequelize.DataTypes.INTEGER,
      references: {
        model: 'cities',
        key: 'id',
      },
    });
  },
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('Sequelize')} Sequelize
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'cityId');
    await queryInterface.dropTable('cities');
  },
};
