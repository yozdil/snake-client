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
  });

  // data event handling
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  return conn;
};

module.exports = { connect };
