'use strict'
// REQUIRES
const jwt = require('jsonwebtoken');
const User = require('../app/models/userModel.js');

/**
 * *Description* comfirmAuth() is a function that controls that any user must be authenticated for access to the app
 * @param {Request} req
 * @param {Response} res
 * @param {any} next
 * @returns {next}
 */
const confirmAuth =  async (req, res, next) => { // CHECK IF USER IS LOGGED. IF NOT, ERROR 403
    if(req.path.match('/auth'))
        return next(); // CONTINUE WITH OUR APP
    
        if(!req.headers.authorization)
        res.status(403).json('YOU ARE NOT AUTHENTICATED');// CHECK HEADERS. MUST APPEAR 'authorization' + 'Beare token authentication'
    
        const token = req.headers.authorization.split(' ')[1]; // SPLIT TOKEN AUTHENTICATION
    if(!token)
        res.status(403).json('WRONG AUTH TOKEN');

    const payload =  jwt.decode(token, process.env.TOKEN_SECRET)// CREATE FIELD 'user'. TOKEN DECODING
    if(!payload){
        res.status(403).json('WRONG AUTH TOKEN');
    }

    const user = await User.findOne({ email: payload.email });
    if(!user)
        res.status(403).json('WRONG AUTH TOKEN');

    req.user = {id: user._id, email: user.email};
    return next();
}
// EXPORTS
module.exports = {
    confirmAuth
}