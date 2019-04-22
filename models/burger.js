var orm = require("../config/orm");

// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


var burger =  {


  // a function to use the orm to retreive all the tables from the burger database
  // cb - the callback function that holds the results
  all: function(cb){
    // burgers is the name of the table
    orm.selectAll("burgers", function(res){
      // we don't want to do anything with the result until we know that the db query has returned.
      cb(res);
    })
  }


}

// Export at the end of the burger.js file.
module.exports = burger;
