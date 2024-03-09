const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./db");
const urlCardRoutes = require("./routes/api/urlCardsApi");
const loginRoutes = require("./routes/login/loginApi");

db.connectDB();

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
app.use((req, res, next) => {
  res.setHeader('Access-Control-Expose-Headers', 'Authorization'); 
  next();
});


app.get("/", (req, res) => {
  res.send("<h2>Welcome there!! sophie</h2> WOW");
});

app.use("/api/urlCard", urlCardRoutes);
app.use("/login", loginRoutes);


app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
