'use strict'
const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const roverRoutes = require('./src/routes/roverRoutes.js')
const userRoutes = require('./src/routes/userRoutes.js')
// const dotenv = require('dotenv');
const connectToDb  = require('./app/services/dbSync.js');
// dotenv.config();

const runApp = async () => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({
        extended: true
    }));

    app.use('/NasaApi',roverRoutes);
    app.use('/users',userRoutes);
    // app.use('/auth',nasaRoutes);
    
    try {
        await connectToDb();
        app.listen(8000, () => {
            console.log('App started...' + 8000);
        })
    } catch (error) {
        console.log(`App launch failed ${error.message}`);
        process.exit(1);
    }
}
runApp();