'use strict'
const { response } = require('express');
const { signUp, singIn } = require('../../app/controllers/authController');
const router = require('express').Router();

router.post('/signUp', async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) 
            res.status(502).json('INCORRECT DATA');
        const token = await signUp({ email, password });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json(error.message);
    }
})


router.post('/logIn', async (req,res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) 
            res.status(502).json('INCORRECT DATA');
        const token = await singIn({ email, password });
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json(error.message);
    }
})

module.exports = router;