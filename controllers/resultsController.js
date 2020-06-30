const db = require("../models");

// Defining methods for the Results Controller
module.exports = {
  findAll: function (req, res) {
    db.Results
      .find()
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  findOneUserId: function (req, res) {
    db.Results.find({userID: req.params.userID})
    .then(dbResults => res.json(dbResults))
    .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Results.create(req.body)
      .then(dbResults => res.json(dbResults))
      .catch(err => res.status(422).json(err));
  },
  // remove: function (req, res) {
  //   db.Results.findById({ _id: req.params.id })
  //     .then(dbResults => dbResults.remove())
  //     .then(dbResults => res.json(dbResults))
  //     .catch(err => res.status(422).json(err));
  // }
};