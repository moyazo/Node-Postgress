'use strict'
const mongoose = require('mongoose');
const roverSchema = new mongoose.Schema({
    "photo_id":{
        type: Number,
        required: true
    },
    "camera_id": {
        type: Number,
        required: true
    },
    "camera_name": {
        type: String,
        required: true
    },
    "img_url": {
        type: String,
        required: true
    }
}, {collection: 'rovers'});
const Rover = mongoose.model('Rover',roverSchema);

module.exports = Rover;