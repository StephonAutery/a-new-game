const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sueSchema = new Schema({
    question: { type: String, required: true },
    a: { type: String, required: true },
    b: { type: String, required: true },
    c: { type: String, required: true },
    answer: { type: String, required: true }
}, { 
    timestamps: true 
});

const Sue = mongoose.model('Sue', sueSchema);

module.exports = Sue;