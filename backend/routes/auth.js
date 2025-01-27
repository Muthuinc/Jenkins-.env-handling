const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Signup
router.post("/signup", async (req, res) => {
  const { name, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ name, password: hashedPassword });
  await newUser.save();
  res.status(201).send("User signed up successfully");
});

// Login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({ name });

  if (!user) return res.status(400).send("User not found");

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) return res.status(400).send("Invalid password");

  const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET);
  res.json({ message: `Hello ${user.name}`, token });
});

module.exports = router;
