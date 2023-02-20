'use strict'
const { response } = require('express');
const { signUp, singIn } = require('../../app/controllers/authController');
const router = require('express').Router();


/**
 * *Description* singUp() is the function that allow us to sing up in our app.
 * @param {Promise} '/signUp'
 * @param {Request} req
 * @param {Response} res 
 */
router.post('/signUp', async (req,res) => {
    try {
        console.log('hola')
        const {email, password} = req.body;
        if(!email || !password) 
            res.status(502).json('INCORRECT DATA');
        const token = await signUp({ email, password });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
/**
 * *Description* singIn() is the function that allow us to sing in in our app.
 * @param {Promise} '/singIn'
 * @param {Request} req
 * @param {Response} res 
 */
router.post('/logIn', async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) 
            res.status(502).json('INCORRECT DATA');
        const token = await singIn({ email, password });
        console.log('hola')
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json(error.message);
    }
})
module.exports = router;