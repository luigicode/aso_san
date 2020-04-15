const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Gig = require("../models/Gig");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get gig list
router.get("/", (req, res) =>
  Gig.findAll()
    .then((gigs) =>
      res.render("gigs", {
        gigs,
      })
    )
    .catch((err) => console.log(err))
);

// Search for gigs

//get search
router.get("/search", (req, res) => {
  let { term } = req.query;

  // for function

  function searchFunction() {
    var input, term, ul, li, a, i, txtValue;
    input = document.getElementById("Input");
    term = input.value.toLowerCase();
    ul = document.getElementById("searchUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toLowerCase().indexOf(term) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

  // Make lowercase
  //term = term.toLowerCase();

  //search
  Gig.findAll({ where: { dog_breeder: { [Op.like]: "%" + term + "%" } } })
    .then((gigs) => res.render("gigs", { gigs }))
    .catch((err) => console.log(err));
});

// Display blog form
router.get("/blog", (req, res) => res.render("blog"));

module.exports = router;
