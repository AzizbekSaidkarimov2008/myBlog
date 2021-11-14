const express = require("express");
const router = express.Router();
// const Text = require("../models/Text");
const Maqola = require("../models/Maqola");
// const fileUpload = require("../middleware/fileUpload");

router.get("/", async function (req, res, next) {
  const maqola = await Maqola.find();
  res.render("index", {
    layout: "layout",
    title: "myblog",
    header: "Maqolalarni ko`rish",
    maqola
  });
});

module.exports = router;
