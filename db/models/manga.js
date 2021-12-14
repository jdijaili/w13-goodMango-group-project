'use strict';
module.exports = (sequelize, DataTypes) => {
  const Manga = sequelize.define('Manga', {
    title: {
      allowNull: false,
      type: DataTypes.STRING(100)
    },
    imgSrc: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    author: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    year: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Manga.associate = function(models) {
    const columnMapping = {
      through: "MangaBookshelfJoin",
      otherKey: "bookshelfId",
      foreignKey: "mangaId"
    }

    Manga.belongsToMany(models.Bookshelf, columnMapping);

    const columnMapping2 = {
      through: "MangaGenreJoin",
      otherKey: "genreId",
      foreignKey: "mangaId"
    }

    Manga.belongsToMany(models.Genre, columnMapping2);

  };
  return Manga;
};
