const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultsSchema = new Schema({
    userID: {
        type: String
    },
    answerResult: {
        type: Array
    },
    questionSet: {
        type: String
    }
});

const Results = mongoose.model('Results', resultsSchema);

module.exports = Results;