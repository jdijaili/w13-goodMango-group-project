'use strict';
module.exports = (sequelize, DataTypes) => {
  const MangaGenreJoin = sequelize.define('MangaGenreJoin', {
    mangaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    genreId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  MangaGenreJoin.associate = function(models) {
    // associations can be defined here
  };
  return MangaGenreJoin;
};
