const db = require("../models")

//Serving up the get route for workouts

module.exports = function (app) {
    app.get("api/workouts", function (req, res) {
        db.Workout.find({}).then(function(dbExercises) {
            res.json(dbExercises)
        });
    });

    // Serving up the workouts range call
    app.get("api/workouts/range", function (req, res) {
       // Mongoose query that selects during a certian range based on user input
    });

    
};