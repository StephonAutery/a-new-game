const db = require("../models");

// Defining methods for the Login Controller
module.exports = {
  // findAll: function (req, res) {
  //     console.log("one time");
  //   db.Login
  //     .find()
  //     .then(dbLogin => res.json(dbLogin))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function (req, res) {
  //   console.log("two time");
  //   db.Login.findById(req.params.id)
  //   .then(dbLogin => res.json(dbLogin))
  //   .catch(err => res.status(422).json(err));
  // },
  create: function (req, res) {
    db.Login.create(req.body)
      .then(dbLogin => res.json(dbLogin))
      .catch(err => res.status(422).json(err));
  },
  // remove: function (req, res) {
  //   console.log("three time");
  //   db.Login.findById({ _id: req.params.id })
  //     .then(dbLogin => dbLogin.remove())
  //     .then(dbLogin => res.json(dbLogin))
  //     .catch(err => res.status(422).json(err));
  // },
  login: function(req, res) {
    db.login.find
    // res.json("hi");
  }
};