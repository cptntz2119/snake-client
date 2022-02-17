let connection;
const actionObj = {
  w: "Move: up",
  s: "Move: down",
  a: "Move: left",
  d: "Move: right",
  y: "Say: SSSSSSSWEET!",
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  // your code here
  if (key === "\u0003") {
    process.exit();
  }

  if (actionObj.hasOwnProperty(key)) {
    connection.write(actionObj[key]);
  }
  // if (key === "w") {
  //   connection.write("Move: up");
  // }
  // if (key === "s") {
  //   connection.write("Move: down");
  // }
  // if (key === "a") {
  //   connection.write("Move: left");
  // }
  // if (key === "d") {
  //   connection.write("Move: right");
  // }
  // if (key === "y") {
  //   connection.write("Say: SSSSSSSWEET!");
  // }
};

module.exports = setupInput;
