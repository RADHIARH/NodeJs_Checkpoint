const fs=require("fs");
const process=require("process")
const path=process.argv[2]
const extension=process.argv[3]
fs.readdir(path,(err,listfiles)=>{
if(err){
    console.log(err)
}
else{
listfiles.forEach((file) =>
  file.split(".")[1] === extension ? console.log(file) : null
);
}
})
