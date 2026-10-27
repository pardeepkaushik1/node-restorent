const express = require('express');
const router = express.Router();

const menuItems = require("../models/menu");

router.post("/menu", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuItems(data);
    const savedMenu = await newMenu.save();
    res.status(200).json({
      message: "persons created successfully",
      data: newMenu,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/menu", async (req, res) => {
  try {
    const allItems = await menuItems.find();

    res.status(200).json(allItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/menu/:role",(req,res)=>{
  const role = req.params.role
   res.send(`Welcome to ${role}`);
})

module.exports = router;