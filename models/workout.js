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
    },
    distance: {
        type: Number
    }
});

const workoutSchema = new Schema({
  day: {
    type: Date,
  },
  totalDuration: {
      type: Number,
  },
  exercises: [
      exerciseSchema
  ],
});

const Workout = mongoose.model("workouts", workoutSchema);

module.exports = Workout;
