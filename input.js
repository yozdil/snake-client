/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const { direction } = require("./constants");

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // handleUserInput is the data callback as we want to exit the game using
  // CTRL+C. And moves
  stdin.on("data", handleUserInput);
  return stdin;
};

// handleUserInput checks for the ctrl + c input and terminate the game. When
// passed later into stdin.on data
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  } else if (key === "w") {
    connection.write(direction.up);
  } else if (key === "a") {
    connection.write(direction.left);
  } else if (key === "s") {
    connection.write(direction.down);
  } else if (key === "d") {
    connection.write(direction.right);
    // m sends a special message sending a string like "Say: _____" to the server
  } else if (key === "m") {
    connection.write(direction.message);
  }
};

// Call the function

setupInput();

module.exports = { setupInput };
