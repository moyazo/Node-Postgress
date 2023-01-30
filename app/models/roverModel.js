'use strict'
const Sequelize = require('sequelize');
const db = require('../services/dbSync')
const roverSchema = db.define('rovers',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    photo_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    camera_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    camera_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img_url: {
        type: Sequelize.STRING,
        allowNull: false,
        
    }
})
module.exports = roverSchema;