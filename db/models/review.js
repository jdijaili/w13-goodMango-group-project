'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
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
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.Manga, { foreignKey: "mangaId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};
