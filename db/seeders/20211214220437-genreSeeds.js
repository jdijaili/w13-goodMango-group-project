'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Genres', [
      { name: "Shonen", createdAt: new Date(), updatedAt : new Date() },
      { name: "Shojo", createdAt: new Date(), updatedAt : new Date() },
      { name: "Fantasy", createdAt: new Date(), updatedAt : new Date() },
      { name: "Young Adult", createdAt: new Date(), updatedAt : new Date() },
      { name: "Romance", createdAt: new Date(), updatedAt : new Date() },
      { name: "Science Fiction", createdAt: new Date(), updatedAt : new Date() },
      { name: "Adventure", createdAt: new Date(), updatedAt : new Date() }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
