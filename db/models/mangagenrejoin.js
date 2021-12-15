'use strict';
module.exports = (sequelize, DataTypes) => {
  const MangaGenreJoin = sequelize.define('MangaGenreJoin', {
    mangaId: {
      allowNull: false,
      references: { model: "Mangas" },
      type: DataTypes.INTEGER
    },
    genreId: {
      allowNull: false,
      references: { model: "Genres" },
      type: DataTypes.INTEGER
    }
  }, {});
  MangaGenreJoin.associate = function(models) {
    MangaGenreJoin.belongsTo(models.Manga, {foreignKey: 'mangaId'});
    MangaGenreJoin.belongsTo(models.Genre, {foreignKey: 'genreId'});
  };
  return MangaGenreJoin;
};
