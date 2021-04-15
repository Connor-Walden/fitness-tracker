const router = require('express').Router();
const Workout = require('../models/workout');

router.get('/api', (req, res) => {
    res.status(200).json({ message: 'Success!' });
});

router.get('/api/workouts', (req, res) => {
    Workout.find({}).sort({ day: -1 })
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json( err );
    });
});

router.post('/api/workouts', (req, res) => {
    Workout.create(req.body)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json( err );
    });
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.updateOne({ id: req.params.id }, req.body)
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json( err );
    });
});

module.exports = router;