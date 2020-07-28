const noticeModel = require("../models/noticeModel");
const express = require("express");
const router = express.Router();

// Get all notices
router.get("/", async (req, res, next) => {
  try {
    const result = await noticeModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get all notices
router.get("/events", async (req, res, next) => {
  try {
    const result = await noticeModel.getEventsOnly();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get all notices
router.get("/officials", async (req, res, next) => {
  try {
    const result = await noticeModel.getOfficialsOnly();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one notices
router.get("/:id", async (req, res, next) => {
  try {
    const result = await noticeModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new notices
router.post("/", async (req, res, next) => {
  try {
    const result = await noticeModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// Delete a notices
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await noticeModel.delete(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (e) {
    return next(e);
  }
});

// Update a notices
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await noticeModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await noticeModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
