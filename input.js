/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // handleUserInput is the data callback as we want to exit the game using
  // CTRL+C.
  stdin.on("data", (key) => {
    handleUserInput(key);
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
