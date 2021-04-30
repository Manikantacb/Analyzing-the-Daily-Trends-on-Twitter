const router = require('express').Router();
let Trendingtopics = require('../models/trendingtopics.model');


router.route('/').get((req, res) => {
    Trendingtopics.find()
        .then(Trendingtopics => res.json(Trendingtopics))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const url = req.body.url;
    const promoted_content = req.body.promoted_content;
    const query = req.body.query;
    const tweet_volume = req.body.tweet_volume

    const newExercise = new Trendingtopics({
        name,
        url,
        promoted_content,
        query,
        tweet_volume
    });

    newExercise.save()
        .then(() => res.json('Trending topic added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;