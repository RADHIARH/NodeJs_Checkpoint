const http=require("http");
const process=require("process");
const url=process.argv[2];
http.get(url,response=> {
      let str = "";
      response.on("data", (chunk) => {
        str += chunk;
      });
      response.on("error", (err) => {
        console.log("Error: " + err.message);
       })
      response.on("end", () => {
        console.log(str.length);
        console.log(str);
      });
    });

