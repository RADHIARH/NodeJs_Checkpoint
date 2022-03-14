const http=require("http");
const process=require("process")
const map = require("through2-map");
const port=Number(process.argv[2])
const server=http.createServer((req,res)=>{
    if(req.method==="POST")  
       req.pipe(map(chunk=> {
       return chunk.toString().toUpperCase();
     })
   ) .pipe(res);
    }).listen(port)