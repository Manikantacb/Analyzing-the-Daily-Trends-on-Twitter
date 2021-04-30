const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommontopicsSchema = new Schema({
    name: { type: String, required: true },
    tweet_volume: { type: String, required: true },
});

const Commontopics = mongoose.model('Commontopics', CommontopicsSchema);

module.exports = Commontopics;