const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// Get all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
});

// POST /api/todos
router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo({
      text: req.body.text,
      deadline: req.body.deadline // 🆕 From frontend
    });
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/todos/:id (toggle completed)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/todos/:id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
