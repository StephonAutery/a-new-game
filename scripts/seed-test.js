const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://final-project:1history@ds041586.mlab.com:41586/heroku_1thwh90l"
);

// create the data objects
const resultsSeed = 
    {
        "userID": "5ed3f94004ed8637c4bfad52",
        "answers": ['a', 'b', 'c', 'b','c', 'a', 'c', 'b','c', 'b', 'b', 'c', 'a'],
        "results": [true, true, false, false, true, false, false, true, true, true, true, true, true],
        "set": "questions"
    }


db.Results.remove({})
	.then(() => db.Results.create(resultsSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});