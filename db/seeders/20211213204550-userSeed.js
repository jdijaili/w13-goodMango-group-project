'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashedPassword = await bcrypt.hash('ilovemangos', 10);

    return queryInterface.bulkInsert('Users', [
      { username: 'DemoUser', hashedPassword: hashedPassword, email: 'demouser@gmail.com', createdAt: new Date(), updatedAt: new Date() }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
