'use strict'
const { response } = require('express');
const router = require('express').Router()
const User = require('../../app/models/userModel.js');
const { getAllUsers,getUserById,createUser,updateUser,removeUser} =
require('../../app/controllers/usersController');

router.get('/all-users', async (req,res) => {
   try {
    console.log('hola')
    const allUsers = await getAllUsers();
    if(!allUsers)
        res.status(502).json('ERROR AT BRING DATA');
    else{
        console.log('BRINGING USERS...')
        res.status(200).json(allUsers);
    }
        
    } catch (error) {
        res.status(500).json('SERVER ERROR 500..')
    } 
})

router.get('/user/:userId', async (req,res) => {
    try {
     const user = await getUserById(req.params.userId);
     if(!user)
         res.status(502).json('ERROR AT BRING DATA');
     else{
        //  console.log('BRINGING USER...')
         res.status(200).json(user);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.post('/createUser', async (req,res) => {
    try {
     const newUser = await createUser(req.body);
     if(!newUser)
         res.status(502).json('ERROR AT CREATE DATA');
     else{
         console.log('CREATING USER...')
         res.status(200).json(newUser);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.put('/changeUser/:userId', async (req,res) => {
    try {
     const UserToChange = await updateUser(req.params.userId,req.body);
     if(!UserToChange)
         res.status(502).json('ERROR AT UPDATE DATA');
     else{
         console.log('UPDATING USER...')
         res.status(200).json(UserToChange);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 router.delete('/remove/:userId', async (req,res) => {
    try {
     const UserToDelete = await removeUser(req.params.userId);
     if(!UserToDelete)
         res.status(502).json('ERROR AT DELETE DATA');
     else{
         console.log('DELETING USER...')
         res.status(200).json(UserToDelete);
     }   
     } catch (error) {
         res.status(500).json('SERVER ERROR 500..')
     } 
 })

 module.exports = router;