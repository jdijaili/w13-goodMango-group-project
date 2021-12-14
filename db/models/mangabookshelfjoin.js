'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MangaBookshelfJoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MangaBookshelfJoin.init({
    mangaId: DataTypes.INTEGER,
    bookshelfId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MangaBookshelfJoin',
  });
  return MangaBookshelfJoin;
};