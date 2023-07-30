const mongoose = require("mongoose");

const dbName = "dashboard";
const MONGO_URI =
  `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:
${process.env.MONGO_INITDB_ROOT_PASSWORD}@mongo:27017/` + dbName;

const connectDB = async () => {
  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo connected successfully")) // Logs out successful when MongoDB connects.
    .catch((e) => {
      console.log(e.message); // Logs out the error message if it encounters any.
    });
};

module.exports = connectDB;
