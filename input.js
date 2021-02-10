/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // handleUserInput is the data callback as we want to exit the game using
  // CTRL+C.
  stdin.on("data", (key) => {
    handleUserInput(key);
  });

  stdin.on("data", (key) => {
    if (key === "w") {
      connection.write("Move: up");
    }
  });
  stdin.on("data", (key) => {
    if (key === "a") {
      connection.write("Move: left");
    }
  });
  stdin.on("data", (key) => {
    if (key === "s") {
      connection.write("Move: down");
    }
  });
  stdin.on("data", (key) => {
    if (key === "d") {
      connection.write("Move: right");
    }
  });

  return stdin;
};

// handleUserInput checks for the ctrl + c input and terminate the game. When
// passed later into stdin.on data
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};

// Call the function

setupInput();

module.exports = { setupInput };
