'use strict';
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define('Genre', {
    name: {
      type: DataTypes.STRING(50)
    }
  }, {});
  Genre.associate = function(models) {
    const columnMapping = {
      through: "MangaGenreJoin",
      otherKey: "mangaId",
      foreignKey: "genreId"
    }

    Genre.belongsToMany(models.Manga, columnMapping);
  };
  return Genre;
};
