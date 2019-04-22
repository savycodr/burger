// Import MySQL connection.
var connection = require("./connection.js");

// Create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {

  // select all columns from the parameter tableInput. Call the callback function with the result
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // insertOne()
  // updateOne()

}

// Export the orm object for the model (burger.js).
module.exports = orm;
