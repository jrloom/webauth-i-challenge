const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ api: "Good news everyone" });
});

module.exports = router;
