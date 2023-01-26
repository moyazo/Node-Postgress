'use strict'
const Rover = require('../models/roverModel.js');
/**
 * *Description* Get all rovers of mongoDb
 * @returns Rover
 */
const getAllRovers = async () => {
    return Rover.find();
}
/**
 * Description
 * @param {String} id
 * @returns Rover
 */
const getRoverById = async (id) => {
    return Rover.findById(id);
}
/**
 * Description
 * @param {JSON} rover
 * @returns void
 */
const createRover  = async (rover) => {
    return Rover(rover).save();
}
/**
 * Description
 * @param {String} id
 * @param {any} data
 * @returns Rover
 */
const updateRover = async (id, data) => { 
    return Rover.findById(id).updateOne(data);
}
/**
 * Description
 * @param {String} id
 * @returns Boolean
 */
const removeRover = async (id) => { // DELETE ENTITY
    await Rover.findById(id).deleteOne()
    return true
}

module.exports = {
    getAllRovers,
    getRoverById,
    createRover,
    updateRover,
    removeRover
}