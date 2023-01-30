'use strict'
// REQUIRES
const Sequelize = require('sequelize');
/**
 * *Description* connectToDb() is a function that connect with our mongo DB.
 */
const sequelize = new Sequelize(
    'postgres',
    'postgres',
    'postgres',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)

module.exports = sequelize;