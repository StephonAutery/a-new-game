const db = require("../models");

// Defining methods for the Questions Controller
module.exports = {
  findAll: function (req, res) {
    switch (req.originalUrl) {
      case "/api/questions/sue":
        db.Sue
          .find()
          .then(dbSue => res.json(dbSue))
          .catch(err => res.status(422).json(err));
        console.log("sue");
        break;
      case "/api/questions/pres":
        db.Presidents
          .find()
          .then(dbPres => res.json(dbPres))
          .catch(err => res.status(422).json(err));
        console.log("pres");
        break;
      case "/api/questions":
        db.Question
          .find()
          .then(dbQuestion => res.json(dbQuestion))
          .catch(err => res.status(422).json(err));
        console.log("questions");
    }
  },
  findById: function (req, res) {
    db.Question.findById(req.params.id)
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Question.create(req.body)
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Question.findById({ _id: req.params.id })
      .then(dbQuestion => dbQuestion.remove())
      .then(dbQuestion => res.json(dbQuestion))
      .catch(err => res.status(422).json(err));
  }
};