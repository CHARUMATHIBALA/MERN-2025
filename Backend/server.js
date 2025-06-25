const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON in requests
app.use(express.json());

// 🏠 Root route
app.get("/", (req, res) => {
  res.send("🏠 Welcome to the backend root route!");
});

// ✅ GET route
app.get("/get", (req, res) => {
  res.send("✅ Success! You hit /get");
});

// ✅ POST route
app.post("/post", (req, res) => {
  const data = req.body;
  res.send(`✅ POST received: ${JSON.stringify(data)}`);
});

// ✅ PUT route (for updating)
app.put("/put", (req, res) => {
  const updatedData = req.body;
  res.send(`♻️ PUT received, updating with: ${JSON.stringify(updatedData)}`);
});

app.delete("/delete", (req, res) => {
  res.send("🗑️ DELETE request received!");
});


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
