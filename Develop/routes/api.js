const path = require("path")
const db = require("../models")

module.exports = function (app) {
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"))
    });

    // Serving up exercise HTML Route
    app.get("/exercise", function (req, res) {
        res.sendFile(path.join(__dirname, "public/exercise.html"))
    });

    // Serve Up exercise? route


};