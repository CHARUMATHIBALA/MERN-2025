const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, default: false },
  deadline: { type: Date }, // ✅ must be here
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", todoSchema);
