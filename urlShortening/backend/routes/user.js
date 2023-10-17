const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const UserModel = require("./models/user");


app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;
  
    const hashedPassword = await bcrypt.hash(password, 2);
  
    const user = new UserModel({ username, password: hashedPassword });
  
    try {
      await user.save();
      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while registering the user" });
    }
  });
  
  app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;
  
    const user = await UserModel.findOne({ username });
  
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      return res.status(401).json({ message: "Authentication failed" });
    }
  
    const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
  
    res.json({ token });
  });
  
  app.get("/api/protected", (req, res) => {
    res.json({ message: "Protected resource accessed successfully!!" });
  });