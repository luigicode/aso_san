const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");
const Featured = require("../models/Featured");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get gig list
router.get("/featured", (req, res) =>
  Featured.findAll()
    .then(featured =>
      res.render("featured", {
        featured
      })
    )
    .catch(err => console.log(err))
);

router.get("/", (req, res) =>
  Gig.findAll()
    .then(gigs =>
      res.render("gigs", {
        gigs
      })
    )
    .catch(err => console.log(err))
);

// Search for gigs
router.get("/search", (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Gig.findAll({ where: { dog_breeder: { [Op.like]: "%" + term + "%" } } })
    .then(gigs => res.render("gigs", { gigs }))
    .catch(err => console.log(err));
});

// Display blog form
router.get("/blog", (req, res) => res.render("blog"));

module.exports = router;
