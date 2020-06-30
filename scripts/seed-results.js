const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://final-project:1history@ds041586.mlab.com:41586/heroku_1thwh90l"
);

// create the data objects
const resultsSeed = [
    {
        "userID": "5ed856264b321f25ec739f87",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "answerResult": ['wrong', 'wrong', 'right', 'wrong', 'wrong', 'right', 'wrong', 'right', 'right', 'wrong', 'right', 'wrong', 'wrong'],
        "questionSet": 'questions'
    }
]

db.Results.remove({})
    .then(() => db.Results.collection.insertMany(resultsSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });