const fs=require("fs");
const process=require("process");
const buffer=fs.readFileSync(process.argv[2]).toString();
const numnewline=buffer.split("\n")
console.log(numnewline.length-1)