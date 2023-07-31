const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectToDatabase = require("./db");
const urlCardRoutes = require("./routes/api/urlCardsApi");

connectToDatabase();

const app = express();

if (process.env.DEV) {
  console.log("Allowing reqeusts from all origins");
  app.use(cors());
}

const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

app.use(function (req, res, next) {
  setTimeout(next, 1500);
});

app.get("/", (req, res) => {
  res.send("<h2>Welcome there!! sophie</h2> WOW");
});

app.use("/api/urlCard", urlCardRoutes);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
