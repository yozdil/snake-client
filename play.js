const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");



//  setupInput takes in the resulting object of the connect function
setupInput(connect());
