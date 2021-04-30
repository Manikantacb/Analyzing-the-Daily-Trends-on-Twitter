const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const TrendingTweetsSchema = new Schema({
    createdat: { type: String, required: true },
    text: { type: String, required: true },
    
});

const TrendingTweets = mongoose.model('TrendingTweets', TrendingTweetsSchema);

module.exports = TrendingTweets;