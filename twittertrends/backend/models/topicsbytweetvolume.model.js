const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TopicsbytweetvolumeSchema = new Schema({
    name: { type: String, required: true },
    tweet_volume: { type: String, required: true },
});

const Topicsbytweetvolume = mongoose.model('Topicsbytweetvolume', TopicsbytweetvolumeSchema);

module.exports = Topicsbytweetvolume;