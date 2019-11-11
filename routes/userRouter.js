const router = require("express").Router();

const Users = require("../models/userModel");
const authUser = require("../auth/authMiddleware");

router.get("/", authUser, (req, res) => {
  Users.find()
    .then(users => res.status(200).json(users))
    .catch(error => res.status(500).json(error.message));
});

module.exports = router;
