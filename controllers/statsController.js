const db = require("../models");

// Defining methods for the Results Controller
module.exports = {
  findAll: function (req, res) {
    db.Stats
      .find()
      .then(dbStats => res.json(dbStats))
      .catch(err => res.status(422).json(err));
  },
  findOneUserId: function (req, res) {
    db.Stats.find({userID: req.params.userID})
    .then(dbStats => res.json(dbStats))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Stats.create(req.body)
      .then(dbStats => res.json(dbStats))
      .catch(err => res.status(422).json(err));
  }
  // remove: function (req, res) {
  //   db.Stats.findById({ _id: req.params.id })
  //     .then(dbStats => dbStats.remove())
  //     .then(dbStats => res.json(dbStats))
  //     .catch(err => res.status(422).json(err));
  // }
};