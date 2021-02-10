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


module.exports = { connect };
