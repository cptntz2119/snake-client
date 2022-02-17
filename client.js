const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  // let timer = 500;
  // const move = (str) => {
  //   setTimeout(() => {
  //     conn.write(str), timer;
  //     timer += 500;
  //   });
  // };

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    conn.write("Name: DZ");
    // conn.write("Move: up");
    // conn.write("Move: down");
    // conn.write("Move: left");
    // conn.write("Move: right");
  });

  return conn;
};

module.exports = connect;
