const db = require("../models");

// Defining methods for the Users Controller
module.exports = {
  findAll: function (req, res) {
    db.Users
      .find()
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  findUserById: function (req, res) {
    db.Users.find({_id: req.params._id})
    .then(dbUsers => res.json(dbUsers))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Users.create(req.body)
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Users.findById({ _id: req.params.id })
      .then(dbUsers => dbUsers.remove())
      .then(dbUsers => res.json(dbUsers))
      .catch(err => res.status(422).json(err));
  }
};