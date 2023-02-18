'use strict';
const {
  Model
} = require('sequelize');
const User = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Rover extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(User,{through: "user_brand"});
    }
  }
  Rover.init({
    photo_id: DataTypes.INTEGER,
    camera_id: DataTypes.INTEGER,
    camera_name: DataTypes.STRING,
    img_url:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rover',
  });
  return Rover;
};