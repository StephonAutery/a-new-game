const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
    userID: {
        type: String
    },
    numRight: {
        type: Number
    },
    numWrong: {
        type: Number
    },
    percentageCorrect: {
        type: Number
    },
    percentageIncorrect: {
        type: Number
    },
    questionSet: {
        type: String
    }
});

const Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;