"use strict";
const { response } = require("express");
const router = require("express").Router();
const getDataFromApi = require("../../app/services/nasaSync.js");
const Rover = require("../../app/models/roverModel.js");
const {
  getAllRovers,
  getRoverById,
  createRover,
  updateRover,
  removeRover,
} = require("../../app/controllers/roversController.js");

router.get("/sync-api", async (req, res) => {
  try {
    const apiData = getDataFromApi();
    if (!apiData) res.status(502).json("ERROR AT BRING DATA");
    else {
      res.status(200).json("BRINGING ROVERS...");
    }
  } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
  }
});
/**
 * * Description*  This route allow us the access of all rovers.
 * @param {Request} req
 * @param {Response} res
 */
router.get("/all-rovers", async (req, res) => {
  try {
    const allRovers = await getAllRovers();
    if (!allRovers) res.status(502).json("ERROR AT BRING DATA");
    else {
      console.log("BRINGING ROVERS...");
      return res.status(200).json(allRovers);
    }
  } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
  }
});
/**
 * *Description* This route allow us the access to one rover, by his id.
 * @param {Request} req
 * @param {Response} res
 */
router.get("/rover/:roverId", async (req, res) => {
    try {
        const rover = await getRoverById(req.params.roverId);
        if (!rover) res.status(502).json("ERROR AT BRING DATA");
        else {
        console.log(rover);
        res.status(200).json(rover);
        }
    } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
    }
});
/**
 * *Description* This route allow us to create a new rover.
 * @param {Request} req
 * @param {Response} res
 */
router.post("/createRover", async (req, res) => {
  try {
    console.log(req.body)
    const newRover = await createRover(req.body);
    if (!newRover) res.status(502).json("ERROR AT CREATE DATA");
    else {
      console.log("CREATING ROVER...");
      res.status(200).json(newRover);
    }
  } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
  }
});
/**
 * *Description* This route allow us to update a rover, by his id.
 * @param {Request} req
 * @param {Response} res
 */
router.put("/changeRover/:roverId", async (req, res) => {
  try {
    console.log(req.body)
    const RoverToChange = await updateRover(req.params.roverId, req.body);
    if (!RoverToChange) res.status(502).json("ERROR AT UPDATE DATA");
    else {
      console.log("UPDATING ROVER...");
      res.status(200).json("UPDATING ROVER...");
    }
  } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
  }
});
/**
 * *Description* This route aloow us to delete a rover, by his id.
 * @param {Request} req
 * @param {Response} res
 */
router.delete("/remove/:roverId", async (req, res) => {
  try {
    const RoverToDelete = await removeRover(req.params.roverId);
    if (!RoverToDelete) res.status(502).json("ERROR AT DELETE DATA");
    else {
      console.log("DELETING ROVER...");
      res.status(200).json("DELETING ROVER...");
    }
  } catch (error) {
    res.status(500).json("SERVER ERROR 500..");
  }
});
module.exports = router;
