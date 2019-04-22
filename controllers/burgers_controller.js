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
  
// export the router
module.exports = router;
