const router = require('express').Router();
let Mostcommonwords = require('../models/mostcommonwords.model');


router.route('/').get((req, res) => {
    Mostcommonwords.find()
        .then(Mostcommonwords => res.json(Mostcommonwords))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const topics = req.body.topics;
    const common_words = req.body.common_words;

    const newExercise = new Mostcommonwords({
        topics,
        common_words
    });

    newExercise.save()
        .then(() => res.json('Mostcommonwords added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;