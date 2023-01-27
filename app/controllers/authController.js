'uses strict'
const User = require('../models/userModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { getUserByEmail } = require('./usersController.js');
const saltRounds = 10;
/**
 * *Description* User sing up function
 * @param {String} {email
 * @param {String} password}
 * @returns String
 */
const signUp = async ({ email,password,saltRounds }) => {
    const userByEmail = await getUserByEmail(email);
    if(!userByEmail)
        throw new Error('USER ALREADY IN USE...');

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPs = await bcrypt.hash(password,salt);  
        const user = new User({email, password: hashedPs, salt}); 
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
    const userByEmail = await getUserByEmail(email);
    if(!userByEmail) // CHECK USER EXIST
        throw new Error('USER NOT FOUND');
        
    const match = await bcrypt.compare(password,userByEmail[0].password); // CAPARING HASHED PASSWORDS
    if(!match) // CHECK COMPARATION
        throw new Error('WRONG PASSWORD')
       
     return jwt.sign({email: userByEmail.email},  process.env.TOKEN_SECRET);
}

module.exports = {
    singIn,
    signUp
}