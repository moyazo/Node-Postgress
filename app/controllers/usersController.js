'use strict'
const User = require('../models/userModel.js');
/**
 * *Description* Get all users of mongoDb
 * @returns User
 */
const getAllUsers = async () => {
    return User.find();
}
/**
 * Description
 * @param {String} id
 * @returns User
 */
const getUserById = async (id) => {
    return User.findById(id);
}
/**
 * Description
 * @param {any} email
 * @returns User
 */
const getUserByEmail = async (email) => {
    return User.findById(email);
}
/**
 * Description
 * @param {JSON} user
 * @returns void
 */
const createUser  = async (user) => {
    return User(user).save();
}
/**
 * Description
 * @param {String} id
 * @param {any} data
 * @returns User
 */
const updateUser = async (id, data) => { 
    return User.findById(id).updateOne(data);
}
/**
 * Description
 * @param {String} id
 * @returns Boolean
 */
const removeUser = async (id) => { // DELETE ENTITY
    await User.findById(id).deleteOne()
    return true
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    getUserByEmail
}