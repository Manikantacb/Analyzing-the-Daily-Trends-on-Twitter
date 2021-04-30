const router = require('express').Router();
let Topicsbytweetvolume = require('../models/topicsbytweetvolume.model');


router.route('/').get((req, res) => {
    Topicsbytweetvolume.find()
        .then(Topicsbytweetvolume => res.json(Topicsbytweetvolume))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const tweet_volume = req.body.tweet_volume;

    const newExercise = new Topicsbytweetvolume({
        name,
        tweet_volume
    });

    newExercise.save()
        .then(() => res.json('Top topic by tweet volume added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;