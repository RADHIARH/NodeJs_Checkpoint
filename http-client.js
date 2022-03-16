const http=require("http");
const process=require("process")
const url=process.argv[2];
http.get(url,response=> {
      response.on("data", (chunk) => {
      console.log(chunk.toString());
    });}).on("error", (err) => {
    console.log("Error: " + err.message);
  });
  