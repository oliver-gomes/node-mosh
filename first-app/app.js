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
const EventEmitter = require("events");
const emitter = new EventEmitter();
// Register a listener
emitter.on("messageLogged", function() {
  console.log("Listener called");
});
// Raise an event
emitter.emit("messageLogged");
