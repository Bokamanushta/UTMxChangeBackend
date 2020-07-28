const doDontModel = require("../models/dodontModel");
const express = require("express");
const router = express.Router();

// Get all hotels
router.get("/", async (req, res, next) => {
  try {
    const result = await doDontModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one hotel
router.get("/:id", async (req, res, next) => {
  try {
    const result = await doDontModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new hotel
router.post("/", async (req, res, next) => {
  try {
    const result = await doDontModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// Delete a hotel
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await doDontModel.delete(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (e) {
    return next(e);
  }
});

// Update a hotel
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await doDontModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await doDontModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
