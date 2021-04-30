const router = require('express').Router();
let Commontopics = require('../models/commontopics.model');


router.route('/').get((req, res) => {
    Commontopics.find()
        .then(Commontopics => res.json(Commontopics))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const tweet_volume = req.body.tweet_volume;

    const newExercise = new Commontopics({
        name,
        tweet_volume
    });

    newExercise.save()
        .then(() => res.json('Commontopics added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;