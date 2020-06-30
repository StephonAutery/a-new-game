const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
    question: { type: String, required: true },
    a: { type: String, required: true },
    b: { type: String, required: true },
    c: { type: String, required: true },
    answer: { type: String, required: true }
}, { 
    timestamps: true 
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;