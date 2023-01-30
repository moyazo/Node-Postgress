'use strict'
const { response } = require('express');
const Rover = require('../models/roverModel.js')
const { creatRover } = require('../controllers/roversController.js')
/**
 * *Description* getDataFromApi() is a function that bring data from our Nasa api.
 */
async function getDataFromApi () {
    try {
        console.log('ESPERANDO RESPUESTA DE ApiNasa');
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY');
        const data = await response.json();
        const DataFromDb = await Rover.findAll();
        const itemsToCreate = [];
        for (let i = 0; i < 10; i++) {                
            const entityData = {
            "photo_id": data["photos"][i].id,
            "camera_id": data["photos"][i].camera.id,
            "camera_name": data["photos"][i].camera.name,
            "img_url": data["photos"][i].img_src,
            };
            const existedItem = !!DataFromDb.find(item => item.photo_id === entityData.photo_id); // NOT DUPS

            if (!existedItem) itemsToCreate.push(entityData);  
        }    
        itemsToCreate.forEach(async item => {
            await Rover.create(item);
        });clera
    }
    catch (error) {
        console.log('ERROR AL LLAMAR A LA ApiNasa',error.message);
    }










    
}
// EXPORTS
module.exports = getDataFromApi

