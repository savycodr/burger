// import express and router middleware
var express = require("express");
var router = express.Router();
// import the burger javascript object which knows how to communicate to the database
var burger = require("../models/burger");

// Create all our routes and set up logic within those routes where required.
// this is the home page
router.get("/", function(req, res) {
  // get all of the items from the burgers table
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// this route will take the new burger info and write it to the database
// the req.body.name should hold the new burger_name
router.post("/api/burgers", function(req, res) {

  console.log("The name of the new burger is " + req.body.burger_name);
  burger.add( req.body.burger_name, function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});
// export the router
module.exports = router;
