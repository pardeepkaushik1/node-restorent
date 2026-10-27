const express = require("express");
const router = express.Router();

const persons = require("../models/person");

router.post("/persons", async (req, res) => {
  try {
    const data = req.body;
    const newpersons = new persons(data);
    const savedpersons = await newpersons.save();
    res.status(200).json({
      message: "persons created successfully",
      data: newpersons,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/persons", async (req, res) => {
  try {
    const allPersons = await persons.find();
    res.status(200).json(allPersons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/persons/:role", async (req, res) => {
  try {
    const role = req.params.role;

    if (
      role == "Frontend Developer" ||
      role == "Backend Developer" ||
      role == "FullStack Developer"
    ) {
      const response = await persons.find({ role });
      console.log("response fetched");
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
