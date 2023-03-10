'use strict'
const Rover = require('../models/roverModel.js');
/**
 * *Description* Get all rovers of mongoDb
 * @returns Rover
 */
const getAllRovers = async () => {
    return Rover.findAll({
        // order:[
        //     ['id','ASC']
        // ]
    });
}
/**
 * Description
 * @param {String} id
 * @returns Rover
 */
const getRoverById = async (id) => {
    const rover = await Rover.findByPk(id);
    return rover;
}
/**
 * Description
 * @param {JSON} rover
 * @returns void
 */
const createRover  = async (rover) => {
    return Rover.create(rover);
}
/**
 * Description
 * @param {String} id
 * @param {any} data
 * @returns Rover
 */
const updateRover = async (id, data) => { 
    const rover = await Rover.update(data,{
        where:{
            id
        }
    });
    console.log(rover)
    return rover
}
/**
 * Description
 * @param {String} id
 * @returns Boolean
 */
const removeRover = async (id) => { // DELETE ENTITY
    await Rover.destroy({
            where:{
                id
            }
        }
    );
    return true
}

module.exports = {
    getAllRovers,
    getRoverById,
    createRover,
    updateRover,
    removeRover
}