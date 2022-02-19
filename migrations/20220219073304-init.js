// @ts-check

module.exports = {
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('Sequelize')} Sequelize
   */
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  /**
   *
   * @param {import('sequelize').QueryInterface} queryInterface
   * @param {import('Sequelize')} Sequelize
   */
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  },
};
