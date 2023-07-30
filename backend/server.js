const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectToDatabase = require("./db");

connectToDatabase();

const app = express();

if (process.env.DEV) {
  console.log("Allowing reqeusts from all origins");
  app.use(cors());
}

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("<h2>Welcome there!! sophie</h2> WOW");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
