//global objects in Node instead of window as in browser
// console.log();
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// Module: Logger (manually made)
// const log = require("./logger.js");
// log("message");

// Module: Path
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// Module: OS
// const os = require("os");
// var osMethod = os.freemem();
// console.log(osMethod);

// Module: File System
// const fs = require("fs");
// const files = fs.readdirSync("./");
// console.log(`Result Sync: ${files}`);

// const filesAsyn = fs.readdir("./", function(err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result Async", files);
// });

// Module : Events
// const EventEmitter = require("events");

// const Logger = require("./logger");
// const logger = new Logger();

// Register a listener
// logger.on("messageLogged", arg => {
//   console.log("Listener called", arg);
// });

// logger.log("message");

// Module : HTTP
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Word");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log("Listening on port 3000...");
