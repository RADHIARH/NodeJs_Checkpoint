const process=require("process");
const fs=require("fs");
fs.readFile(process.argv[2],"utf8",(err,data)=>{
    if(err){
        return console.log("error")
    }
    else {
        const str = data.toString();
        const num = str.split("\n").length - 1;
        console.log(num);
    }
});
