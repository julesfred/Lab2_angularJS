var express = require("express");
var routes = express.Router();
// var bodyParser = require("body-parser");
// app.use(bodyParser.json());

routes.get("/tasks", function(req, res) {
    res.send("GET request was made");
});

routes.post("/tasks", function(req, res) {
    res.send("POST request was made");
});

routes.put("/tasks/:id", function(req, res) {
    res.send("PUT request was made");
});

routes.delete("/tasks/:id", function(req, res) {
    res.send("DELETE request was made");
});

module.exports=routes;