const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");
const Featured = require("../models/Featured");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//featured list
router.get("/", (req, res) =>
  Featured.findAll()
    .then((featured) =>
      res.render("featured", {
        featured,
      })
    )
    .catch((err) => console.log(err))
);

module.exports = router;
