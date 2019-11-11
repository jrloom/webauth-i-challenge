const bcrypt = require("bcryptjs");

const router = require("express").Router();

const Users = require("../models/userModel");

router.post("/register", (req, res) => {
  const userInfo = req.body;

  const hash = bcrypt.hashSync(userInfo.password, 14);

  userInfo.password = hash;

  Users.add(userInfo)
    .then(user => res.status(201).json(user))
    .catch(error => res.status(500).json(error.message));
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      user && bcrypt.compareSync(password, user.password)
        ? res.status(200).json({ message: `Welcome ${user.username}` })
        : res.status(401).json({ message: "Invalid credentials" });
    })
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;
