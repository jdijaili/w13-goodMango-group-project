'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    mangaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Mangas" }
    },
    vote: {
      type: DataTypes.BOOLEAN
    }
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.Manga, { foreignKey: "mangaId" });
    Vote.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Vote;
};
