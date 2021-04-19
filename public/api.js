const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("https://shrouded-citadel-72947.herokuapp.com/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const id = location.search.split("=")[1];

    const res = await fetch("https://shrouded-citadel-72947.herokuapp.com/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout(data = {
    day: Date.now(),
    totalDuration: 0,
    exercises: []
  }) {
    const res = await fetch("https://shrouded-citadel-72947.herokuapp.com/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

  async getWorkoutsInRange() {
    const res = await fetch(`https://shrouded-citadel-72947.herokuapp.com/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
