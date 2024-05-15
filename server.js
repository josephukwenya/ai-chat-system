const express = require("express");
const app = express();
const connectDB = require("./database/db");
require("dotenv").config();

connectDB();

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
