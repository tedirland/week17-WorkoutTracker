const router = require("express").Router()
const Workout = require("../models/workout")

//Serving up the get route for workouts

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbTransaction => {
            res.json(dbTransaction)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbTransaction => {
            res.json(dbTransaction)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

module.exports = router;