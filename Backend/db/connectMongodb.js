const mongoose = require("mongoose");

const connectMongoDb = async (req, res) => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected. ${conn.connection.host}`);
  } catch (e) {
    console.log(`DB Connection error: ${e.message}`);
    process.exit(1);
  }
};

module.exports = connectMongoDb;
