const mongoose = require("mongoose");
const db = require("../models");

// Connect to MongoDB via Mongoose
mongoose.connect(
	// process.env.MONGODB_URI || "mongodb://localhost/historyPortal"
	process.env.MONGODB_URI || "mongodb://a-new-game:1history@ds331568.mlab.com:31568/heroku_vm824khm"
);

// create the data objects
const questionsSeed = [
	{
		question: "in what year did the US civil war begin?",
		a: "1861",
		b: "1865",
		c: "2016",
		answer: "a"
	},
	{
		question: "how old is Bernie Sanders?",
		a: "we're not sure, he'll have to die before we can carbon date him.",
		b: "older than Joe Biden.",
		c: "78 as of stardate 47634.44",
		answer: "all"
	},
	{
		question: "who is Luke's father?",
		a: "Darth Vader",
		b: "Anakin Skywakler",
		c: "Donald Trump",
		answer: "a"
	},
	{
		question: "what public office did Abraham Lincoln hold before becoming President?",
		a: "senator",
		b: "postal clerk",
		c: "recorder",
		answer: "a"
	},
	{
		question: "what was the US slave population at the beginning of the US civil war?",
		a: "20,000",
		b: "5,000 but only in the south",
		c: "12 million",
		answer: "c"
	},
	{
		question: 'Who said: "Explaining a joke is like dissecting a frog: you understand it better, but the frog dies in the process."',
		a: "Joe Biden",
		b: "Mark Twain",
		c: "Dave Chapelle",
		answer: "b"
	},
	{
		question: "what is the pay gap between white men and women in the US",
		a: "latin women earn 58% of what white men earn",
		b: "black women earn 65% of what white men earn",
		c: "white women earn 82% of what white men earn",
		answer: "all"
	},
	{
		question: "how old is Joe Biden?",
		a: "we're not sure, he'll have to die before we can carbon date him.",
		b: "younger than Bernie Sanders (1 year).",
		c: "77 as of stardate 47634.44",
		answer: "all"
	},
	{
		question: "which amendment to the constitution of the United States abolished slavery in the United States?",
		a: "the 2nd Amendment",
		b: "the 13th Amendment",
		c: "the 28th Amendment",
		answer: "b"
	},
	{
		question: "how many gender non-conforming or transgender people were killed in the US, in 2019 because of their identity?",
		a: "22",
		b: "22",
		c: "22",
		answer: "all"
	},
	{
		question: "what is the official date of the beginning of World War II",
		a: "December 11, 1941, when Hitler declared war on the US",
		b: "September 1, 1939, when Hitler invaded Poland",
		c: "Japan’s 1937 invasion of China",
		answer: "b"
	}
];

db.Question.remove({})
  .then(() => db.Question.collection.insertMany(questionsSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });