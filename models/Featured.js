const Sequelize = require("sequelize");
const db = require("../config/database");

const Featured = db.define("featured_gigs", {
  title: {
    type: Sequelize.STRING
  },
  dog_breeder: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  },
  contact_email: {
    type: Sequelize.STRING
  }
});

module.exports = Featured;
