const http = require("http");
const process = require("process");
const url1 = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const url = [url1, url2, url3];
url.map((url) => {
  http.get(url, (response) => {
    let str = "";
    response.on("data", (chunk) => {
      str += chunk;
    });
    response.on("end", () => {
      console.log(str);
    });
  });
});
