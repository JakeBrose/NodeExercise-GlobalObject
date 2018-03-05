#!/usr/bin/env node

process.env.versionNode = "v6 .3 .1";
process.env.versionV8 = "5.0.71.57";

console.log(`Node.js version: ${process.env.versionNode}\nV8 version ${process.env.versionV8}`);

// // // // // //
// V2 //
// // // // // // 

process.env.versionObj = ({ a, b } = { a: "v6 .3 .1", b: "5.0.71.57" });

console.log(process.env.versionObj.a);
