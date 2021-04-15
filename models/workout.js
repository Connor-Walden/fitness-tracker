const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
    },
    duration: { 
        type: Number,
    },
    weight: {
        type: Number,
    },
    reps: {
        type: String,
    },
    sets: { 
        type: String,
    }
});

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises: [
      exerciseSchema
  ],
});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
