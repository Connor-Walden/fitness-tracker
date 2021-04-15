const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    type: {
        type: String,
        required: "Enter the type of the exercise"
    },
    name: {
        type: String,
        required: "Enter the name of the exercise"
    },
    duration: { 
        type: Number,
        required: "Enter the duration of the exercise"
    },
    weight: {
        type: Number,
        required: "Enter the weight of the exercise"
    },
    reps: {
        type: String,
        required: "Enter the reps for the exercise"
    },
    sets: { 
        type: String,
        required: "Enter the sets for the exercise"
    }
});

const workoutSchema = new Schema({
  day: {
    type: Number,
    required: "Enter a day for the workout"
  },
  excercises: [
      exerciseSchema
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
