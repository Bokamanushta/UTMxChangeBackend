const studentModel = require("../models/studentModel");
const express = require("express");
const router = express.Router();

// Get all students
router.get("/", async (req, res, next) => {
  try {
    const result = await studentModel.get();
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Get one student
router.get("/:id", async (req, res, next) => {
  try {
    const result = await studentModel.getById(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.json(result);
  } catch (e) {
    return next(e);
  }
});

// Create a new student
router.post("/", async (req, res, next) => {
  try {
    const result = await studentModel.create(req.body);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// verify
router.post("/verify", async (req, res, next) => {
  try {
    const result = await studentModel.getUserName(req.body['username']);
    if (!result) return res.sendStatus(404);
    else{
      const pass = await studentModel.verifyPassword(req.body['password']);
      if (!pass) return res.sendStatus(404);
      return res.json(pass);
    }
  } catch (e) {
    return next(e);
  }
});

// verify
router.post("/semester", async (req, res, next) => {
  try {
    const result = await studentModel.getBySemester(req.body['semester']);
    if (!result) return res.sendStatus(409);
    return res.status(201).json(result);
  } catch (e) {
    return next(e);
  }
});

// Delete a student
router.delete("/:id", async (req, res, next) => {
  try {
    const result = await studentModel.delete(req.params.id);
    if (!result) return res.sendStatus(404);
    return res.sendStatus(200);
  } catch (e) {
    return next(e);
  }
});

// Update a students
router.patch("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const doc = await studentModel.getById(id);
    if (!doc) return res.sendStatus(404);

    // Merge existing fields with the ones to be updated
    Object.keys(data).forEach((key) => (doc[key] = data[key]));

    const updateResult = await studentModel.update(id, doc);
    if (!updateResult) return res.sendStatus(404);

    return res.json(doc);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
