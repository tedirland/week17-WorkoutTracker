const router = require("express").Router()
const Workout = require("../models/workout.js")
const path = require("path")

//Serving up the get route for workouts

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});

router.get("/api/exercise")
 

router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err)
        });
});


module.exports = router;