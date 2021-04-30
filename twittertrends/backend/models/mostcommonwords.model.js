const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MostcommonwordsSchema = new Schema({
    topics: { type: String, required: true },
    common_words: { type: String, required: true },
});

const Mostcommonwords = mongoose.model('Mostcommonwords', MostcommonwordsSchema);

module.exports = Mostcommonwords;