const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://final-project:1history@ds041586.mlab.com:41586/heroku_1thwh90l"
);

// create the data objects
const statsSeed = [
    {
        "userID": "5ed856264b321f25ec739f87",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f87",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },


    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
   {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },


   {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'        
    },
    {
        "userID": "5ed856264b321f25ec739f89",
        "numRight": 5,
        "numWrong": 8,
        "percentRight": 42,
        "percentageWrong": 58,
        "questionSet": 'questions'
    }
]

db.Stats.remove({})
	.then(() => db.Stats.collection.insertMany(statsSeed))
	.then(data => {
		console.log(data.stats.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});