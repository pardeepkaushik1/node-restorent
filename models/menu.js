const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    enum: ["Pizza", "Burger", "Biryani", "Drinks", "Dessert"],
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
  },

  isVeg: {
    type: Boolean,
    default: true,
  },

  isAvailable: {
    type: Boolean,
    default: true,
  },

  image: {
    type: String,
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
