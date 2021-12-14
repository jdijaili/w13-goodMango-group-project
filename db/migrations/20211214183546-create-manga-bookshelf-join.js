'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('MangaBookshelfJoins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mangaId: {
        allowNull: false,
        references: { model: "Mangas" },
        type: Sequelize.INTEGER
      },
      bookshelfId: {
        allowNull: false,
        references: { model: "Bookshelves" },
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('MangaBookshelfJoins');
  }
};
