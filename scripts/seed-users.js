const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    // process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
    process.env.MONGODB_URI || "mongodb://history-portal:1history@ds223738.mlab.com:23738/heroku_xzdj6sk9"
);

// create the data objects
const usersSeed = [
    {
        "name": "Stephon Autery",
        "email": "stephon@stephonautery.com",
        "password": "trigger",
        "role": "admin",
        "race": "Negro",
        "birthDate": 08/11/1965,
        "date": 06/30/2020
    },
    {
        "name": "Suzannah Levy",
        "email": "slate48@gmail.com",
        "password": "trigger",
        "role": "user",
        "race": "White",
        "birthDate": 10/31/1967,
        "date": 06/30/2020
    },
    {
        "name": "Cate Autery",
        "email": "cate@cateautery.com",
        "password": "trigger",
        "role": "admin",
        "race": "Black",
        "birthDate": 03/12/2008,
        "date": 06/30/2020
    },
    {
        "name": "John Autery",
        "email": "john@johndavisautery.com",
        "password": "trigger",
        "role": "admin",
        "race": "Black",
        "birthDate": 12/17/2009,
        "date": 06/30/2020
    },
    {
        "name": "Trap McGee",
        "email": "trap@trapmcgee.com",
        "password": "trigger",
        "role": "user",
        "race": "White",
        "birthDate": 08/11/1995,
        "date": 06/30/2020
    },
    {
        "name": "Blair Smith",
        "email": "blair@blairsmith.com",
        "password": "trigger",
        "role": "user",
        "race": "White",
        "birthDate": 08/11/1989,
        "date": 06/30/2020
    }
]

db.Users.remove({})
	.then(() => db.Users.collection.insertMany(usersSeed))
	.then(data => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});