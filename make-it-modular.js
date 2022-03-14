var filterFn = require("./mymodule.js");
var path = process.argv[2];
var ext = process.argv[3];
filterFn(path, ext, (err, list)=> {
  if (err) return(err);
  list.forEach(element=> {
    console.log(element);
  });
});