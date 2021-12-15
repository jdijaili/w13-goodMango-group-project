'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Genres', [
      { name: "Shonen", createdAt: new Date(), updatedAt: new Date() },
      { name: "Shojo", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fantasy", createdAt: new Date(), updatedAt: new Date() },
      { name: "Young Adult", createdAt: new Date(), updatedAt: new Date() },
      { name: "Romance", createdAt: new Date(), updatedAt: new Date() },
      { name: "Science Fiction", createdAt: new Date(), updatedAt: new Date() },
      { name: "Adventure", createdAt: new Date(), updatedAt: new Date() },
      { name: "Comics", createdAt: new Date(), updatedAt: new Date() },
      { name: "Seinen", createdAt: new Date(), updatedAt: new Date() },
      { name: "Mystery", createdAt: new Date(), updatedAt: new Date() },
      { name: "Business", createdAt: new Date(), updatedAt: new Date() },
      { name: "Crime", createdAt: new Date(), updatedAt: new Date() },
      { name: "Fiction", createdAt: new Date(), updatedAt: new Date() },
      { name: "Horror", createdAt: new Date(), updatedAt: new Date() },
      { name: "Comedy", createdAt: new Date(), updatedAt: new Date() },
      { name: "Thriller", createdAt: new Date(), updatedAt: new Date() },
      { name: "Suspense", createdAt: new Date(), updatedAt: new Date() },
      { name: "Action", createdAt: new Date(), updatedAt: new Date() },
      { name: "Slice of Life", createdAt: new Date(), updatedAt: new Date() },
      { name: "Boy's Love", createdAt: new Date(), updatedAt: new Date() },
      { name: "Sports", createdAt: new Date(), updatedAt: new Date() },
      { name: "Superhero", createdAt: new Date(), updatedAt: new Date() },
      { name: "Martial Arts", createdAt: new Date(), updatedAt: new Date() },
      { name: "Coming of Age", createdAt: new Date(), updatedAt: new Date() },
      { name: "Supernatural", createdAt: new Date(), updatedAt: new Date() },
      { name: "Girls Love", createdAt: new Date(), updatedAt: new Date() },
      { name: "Drama", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dark Fantasy", createdAt: new Date(), updatedAt: new Date() },
      { name: "Josei", createdAt: new Date(), updatedAt: new Date() },
      { name: "Gekiga", createdAt: new Date(), updatedAt: new Date() },
      { name: "Slice of Life", createdAt: new Date(), updatedAt: new Date() },
      { name: "Psychological", createdAt: new Date(), updatedAt: new Date() },
      { name: "Historical", createdAt: new Date(), updatedAt: new Date() },
      { name: "School", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Genres', null, {});
  }
};
