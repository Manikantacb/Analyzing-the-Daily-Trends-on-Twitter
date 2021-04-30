const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const TrendingtopicsSchema = new Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    promoted_content: { type: String, required: true },
    query: { type: String, required: true },
    tweet_volume: { type: Schema.Types.Mixed, required: true },
});

const Trendingtopics = mongoose.model('Trendingtopics', TrendingtopicsSchema);

module.exports = Trendingtopics;