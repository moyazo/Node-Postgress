'use strict'
const User = require('../models/userModel.js');
/**
 * *Description* Get all users of mongoDb
 * @returns User
 */
const getAllUsers = async () => {
    return User.findAll();
}
/**
 * Description
 * @param {String} id
 * @returns User
 */
const getUserById = async (id) => {
    return User.findByPk(id);
}
/**
 * Description
 * @param {any} email
 * @returns User
 */
const getUserByEmail = async (email) => {
    return User.findOne(
        {
            where :{
                email
            }
        }
    );
}
/**
 * Description
 * @param {JSON} user
 * @returns void
 */
const createUser  = async (user) => {
    return User.create({user});
}
/**
 * Description
 * @param {String} id
 * @param {any} data
 * @returns User
 */
const updateUser = async (id, data) => { 
    return User.update(data,{
        where:{
            id
        }
    });;
}
/**
 * Description
 * @param {String} id
 * @returns Boolean
 */
const removeUser = async (id) => { // DELETE ENTITY
    await User.destroy({
            where:{
                id
            }
        }
    );
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