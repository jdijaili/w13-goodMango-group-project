'use strict';
module.exports = (sequelize, DataTypes) => {
  const MangaBookshelfJoin = sequelize.define('MangaBookshelfJoin', {
    mangaId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    bookshelfId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  MangaBookshelfJoin.associate = function(models) {
    // associations can be defined here
  };
  return MangaBookshelfJoin;
};
