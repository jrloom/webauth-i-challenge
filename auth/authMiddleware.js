const bcrypt = require("bcryptjs");

const Users = require("../models/userModel");

function validateUser(req, res, next) {
  const { username, password } = req.headers;

  if (username && password) {
    Users.findBy({ username })
      .first()
      .then(user => {
        user && bcrypt.compareSync(password, user.password)
          ? next()
          : res.status(401).json({ message: "Invalid credentials" });
      })
      .catch(error => res.status(500).json(error.message));
  } else {
    res.status(400).json({ message: "You shall not pass!" });
  }
}

module.exports = validateUser;
