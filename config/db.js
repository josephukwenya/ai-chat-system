const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_DB);
  console.log(`Database connected: ${conn.connection.host}`);
};

module.exports = connectDB;
