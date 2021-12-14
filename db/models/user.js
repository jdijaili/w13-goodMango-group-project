'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Bookshelf, { foreignKey: "userId" });
  };
  return User;
};
