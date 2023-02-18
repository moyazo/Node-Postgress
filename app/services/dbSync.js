'use strict'
// REQUIRES
const Sequelize = require('sequelize');
/**
 * *Description* connectToDb() is a function that connect with our mongo DB.
 */
const sequelize = new Sequelize(
    // USER ,DB AND PASSWORD ARE postgres
    'postgres',
    'postgres',
    'postgres',
    {
        host: process.env.HOST,
        dialect: 'postgres'
    }
)

module.exports = sequelize;