const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

const UserModel = require("./models/user");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

const DB_URL = process.env.DB_URL;

app.use(bodyParser.json()); // For parsing JSON bodies

app.use(cors());

//connect to MongoDB
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});