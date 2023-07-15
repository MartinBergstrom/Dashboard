const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h2>Welcome there!! sophie</h2>");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);