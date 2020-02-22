const Sequelize = require("sequelize");
const db = require("../config/database");

const Gig = db.define("gigs", {
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

module.exports = Gig;
