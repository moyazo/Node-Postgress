'use strict'
const User = require('../models/userModel.js');
/**
 * *Description* Get all users of mongoDb
 * @returns {JSON}
 */
const getAllUsers = async () => {
    const allUsers = await User.find();
    return allUsers;
}
/**
 * Description
 * @param {String} id
 * @returns {JSON}
 */
const getUserById = async (id) => {
    const UserById = await User.findById();
    return UserById;
}
/**
 * Description
 * @param {JSON} user
 * @returns {void}
 */
const createUser  = async (user) => {
    const newUser = await User(User);
    return newUser.save();
}
/**
 * Description
 * @param {String} id
 * @param {any} data
 * @returns {JSON}
 */
const updateUser = async (id, data) => { 
    const updateEntity = User.getTaskListById(id)
    updateEntity.updateOne(data)
    return updateEntity
}
/**
 * Description
 * @param {String} id
 * @returns {Boolean}
 */
const removeUser = async (id) => { // DELETE ENTITY
    await User.findByIdAndDelete(id)
    return true
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser
};