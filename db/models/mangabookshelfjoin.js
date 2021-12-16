'use strict';
module.exports = (sequelize, DataTypes) => {
  const MangaBookshelfJoin = sequelize.define('MangaBookshelfJoin', {
    mangaId: {
      allowNull: false,
      references: { model: "Mangas" },
      type: DataTypes.INTEGER
    },
    bookshelfId: {
      allowNull: false,
      references: { model: "Bookshelves" },
      type: DataTypes.INTEGER
    }
  }, {});
  MangaBookshelfJoin.associate = function(models) {
    // associations can be defined here
    MangaBookshelfJoin.belongsTo(models.Manga, {foreignKey: 'mangaId'});
    MangaBookshelfJoin.belongsTo(models.Bookshelf, {foreignKey: 'bookshelfId'});
  };
  return MangaBookshelfJoin;
};
