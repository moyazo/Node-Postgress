'use strict'
const { response } = require('express');
const Rover = require('../models/roverModel.js')
const { creatRover } = require('../controllers/roversController.js')
async function getDataFromApi () {
    try {
        console.log('ESPERANDO RESPUESTA DE ApiNasa');
        const response = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=gq1H9aAzvLDgCepccfLr2i9Jxxz2yCo0oMeVspdf');
        const data = await response.json();
        // console.log(data)
        const DataFromDb = await Rover.find();
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
        await Rover.insertMany(itemsToCreate); // INSERT ON BD
    }
    catch (error) {
        console.log('ERROR AL LLAMAR A LA ApiNasa');
    }
}
// EXPORTS
module.exports = getDataFromApi

