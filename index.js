// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 10000; // Render provides PORT automatically

app.get("/", (req, res) => {
  res.send("I'm Mathubharathi");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});