const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://final-project:1history@ds041586.mlab.com:41586/heroku_1thwh90l"
);

// create the data objects
const resultsSeed = [
    {
        "userID": '5ed580750c9e191bc0e588ad',
        "answers": ['c', 'c', 'c', 'c','c', 'c', 'c', 'c','c', 'c', 'c', 'c','c'],
        "results": ['false','false','true','false','false', 'true','false','true','true',  'false','true','false','false'],
        "set": 'questions'
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