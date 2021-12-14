'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookshelf = sequelize.define('Bookshelf', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING(100)
    }
  }, {});
  Bookshelf.associate = function(models) {
    const columnMapping = {
      through: "MangaBookshelfJoin",
      otherKey: "mangaId",
      foreignKey: "bookshelfId"
    }

    Bookshelf.belongsToMany(models.Manga, columnMapping);
    Bookshelf.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Bookshelf;
};
