'use strict';
const {
  Model
} = require('sequelize');
const Rover = require('./rover');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(Rover,{through: "user_brand"});
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};