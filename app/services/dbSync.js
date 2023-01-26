'use strict'
// REQUIRES
const mongoose = require('mongoose');
const connectToDb = async () =>{ // CONNECTED TO DB WITH MONGOOSE
    try {
        console.log('CONNECTING TO nasa_db');
        await mongoose.connect('mongodb://localhost:27017/nasa_db');
        console.log('CONNECTED TO nasa_db');
    } catch (error) {
        console.log(error.message);
    }
}
// EXPORTS
module.exports = connectToDb;