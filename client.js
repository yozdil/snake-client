const net = require("net");
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Message to print out if connection successful.
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    // With a successful connection send server a player name of max three
    // characters.
    conn.write("Name: YAM");
    // Send server the move up command, as soon as we are connected.
    conn.write("Move: up");
  });

  // Sending server commands via setInterval.
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  //   setInterval(() => {
  //     conn.write("Move: right");
  //   }, 500);
  // });

  // data event handling
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

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
  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

setupInput();


// handleUserInput checks for the ctrl + c input and terminate the game. When
// passed later into stdin.on data
const handleUserInput = (key) => {
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }
};


module.exports = { connect };
