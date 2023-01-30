'use strict'
const express = require('express');
const bodyParse = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const authRoutes = require('./src/routes/authRoutes.js')
const roverRoutes = require('./src/routes/roverRoutes.js')
const userRoutes = require('./src/routes/userRoutes.js')
const sequelize  = require('./app/services/dbSync.js');
const { confirmAuth } = require('./middelware/authMiddleWare.js')
dotenv.config();
/**
 * *Description* runApp() is the function that will start up our App
 */
const runApp = async () => {
    app.use(bodyParse.json());
    app.use(bodyParse.urlencoded({
        extended: true
    }));
    app.use(confirmAuth);
    app.use('/auth',authRoutes);
    app.use('/NasaApi',roverRoutes);
    app.use('/users',userRoutes);

    try {
        await sequelize.sync({force: true});
        app.listen(8000, () => {
            console.log('App started...' + 8000);
        })
    } catch (error) {
        console.log(`App launch failed ${error.message}`);
        process.exit(1);
    }
}
runApp();