const db = require("../models");

// Defining methods for the Questions Controller
module.exports = {
  findAll: function (req, res) {
    db.History
      .find()
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.History.findById(req.params.id)
    .then(dbQuestion => res.json(dbQuestion))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.History.create(req.body)
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.History.findById({ _id: req.params.id })
      .then(dbQuestion => dbQuestion.remove())
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  }
};