const router = require('express').Router();
let TrendingTweets = require('../models/trendingtweets.model');


router.route('/').get((req, res) => {
    TrendingTweets.find()
        .then(TrendingTweets => res.json(TrendingTweets))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const createdat = req.body.createdat;
    const text = req.body.text;

    const newExercise = new TrendingTweets({
        createdat,
        text
    });

    newExercise.save()
        .then(() => res.json('Tweet added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;