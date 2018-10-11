//global objects in Node instead of window as in browser
// console.log();
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// Our create module

// const log = require("./logger.js");
// log("message");

// Module: Path
// const path = require("path");
// var pathObj = path.parse(__filename);
// console.log(pathObj);

// Module: OS
const os = require("os");
var osPlat = os.release();
console.log(osPlat);
