const mongoose = require("mongoose");

const dbName = "dashboard";
const MONGO_URI =
  `mongodb://${process.env.MONGO_NODE_USERNAME}:
${process.env.MONGO_NODE_PASSWORD}@mongo:27017/` + dbName;

const connectDB = async () => {
  try {
    await mongoose
      .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Mongo connected successfully");
      }) // Logs out successful when MongoDB connects.
      .catch((e) => {
        console.log(e.message); // Logs out the error message if it encounters any.
      });

    const collection = mongoose.connection.db.collection("urlcards");
    const data = await collection.find({}).toArray();
    console.log("Collection data:", data);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = { connectDB };
