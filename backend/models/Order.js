const mongoose = require("mongoose");

const UpdateOrSchema = new mongoose.Schema({
  agentId: {
    type: String,
    required: false,
  },
  pickupad: {
    type: String,
    required: true,
  },
  dropad: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", UpdateOrSchema);

module.exports = Order;
