'use strict'
const { response } = require('express');
const router = require('express').Router()
const User = require('../../app/models/userModel.js');
const { getAllUsers,getUserById,createUser,updateUser,removeUser} =
require('../../app/controllers/usersController');

router.get('/all-rovers', async (req,res) => {
   try {
    const allRovers = await getAllUsers();
    if(!allRovers)
        res.status(502).json('ERROR AT BRING DATA');
    else{
        console.log('BRINGING ROVERS...')
        res.status(200).json(allRovers);
    }
        
    } catch (error) {
        res.status(500).json('SERVER ERROR 500..')
    } 
})

router.get('/rover/:roverId', async (req,res) => {
    try {
     const rover = await getUserById(req.params.id);
     if(!rover)
         res.status(502).json('ERROR AT BRING DATA');
     else{
         console.log('BRINGING ROVER...')
         res.status(200).json(rover);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.post('/createRover', async (req,res) => {
    try {
     const newRover = await createUser(req.body);
     if(!newRover)
         res.status(502).json('ERROR AT CREATE DATA');
     else{
         console.log('CREATING ROVER...')
         res.status(200).json(newRover);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.put('/changeRover/:roverId', async (req,res) => {
    try {
     const RoverToChange = await updateUser(req.body);
     if(!RoverToChange)
         res.status(502).json('ERROR AT UPDATE DATA');
     else{
         console.log('UPDATING ROVER...')
         res.status(200).json(RoverToChange);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.put('/remove/:roverId', async (req,res) => {
    try {
     const RoverToDelete = await removeUser(req.params.id);
     if(!RoverToDelete)
         res.status(502).json('ERROR AT DELETE DATA');
     else{
         console.log('DELETING ROVER...')
         res.status(200).json(RoverToDelete);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 module.exports = router;