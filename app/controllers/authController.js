'uses strict'
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('./usersController.js');
const salt = await bcrypt.genSalt(saltRounds);
const hashedPs = '';
let user = {}; 
// const match = false;

/**
 * *Description* User sing up function
 * @param {String} {email
 * @param {String} password}
 * @returns String
 */
const singUp = async ({ email,password }) => {
    const userByEmail = await getUserByEmail(email);
    
    if(!userByEmail)
        throw new Error('USER ALREADY IN USE...');

        hashedPs = await bcrypt.hash(password,salt);  
        user = new User({email, password: hashedPs, salt}); 
        await user.save();

    return jwt.sign({email: user.email}, process.env.TOKEN_SECRET);
}
/**
 * Description
 * @param {String} {email
 * @param {String} password}
 * @returns String
 */
const singIn = async ({ email,password }) => {
    const userByEmail = await getUserByEmail(email) ? await getUserByEmail(email): new Error('USERNOT FOUND...');

    userByEmail = await bcrypt.compare(password,user.password) ?
    jwt.sign({email: userByEmail.email},  process.env.TOKEN_SECRET) : new Error('WRONG PASSWORD...');

     return userByEmail;
}

module.exports = {
    singIn,
    singUp
}