const http=require("http");
const fs=require("fs");
const process=require("process");
const port =process.argv[2]
const path=process.argv[3]
const server=http.createServer((req,res)=>{
var readStream = fs.createReadStream(path);
readStream.pipe(res)
}).listen(Number(port))