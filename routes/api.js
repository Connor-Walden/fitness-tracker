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

router.get('/api/workouts/range', (req, res) => {
    Workout.find({
        day: { $gte: new Date(new Date().getTime() - (7 * 24 * 60 * 60 * 1000)) }
    })
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
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

router.put('/api/workouts/:id', async (req, res) => {
    try {
        let workout = await Workout.findById(req.params.id);
        if(workout != null) {
            await workout.exercises.push(req.body);

            let sum = 0;

            workout.exercises.forEach((exercise) => {
                sum += exercise.duration;
            });
            workout.totalDuration = sum;

            await workout.save();
            res.status(200).json(workout);
        } else {
            res.status(404).json({ message: 'Could not find workout with id ' + req.params.id });
        }
    } catch(err) {
        console.log(err);
        res.status(500).json( err );
    }
});

module.exports = router;