var fs = require("fs");
module.exports = function filterFiles(pathname, extension, callback) {
  fs.readdir(pathname, function (err, listfiles) {
    if (err) return callback(err);
    var newfiles = [];
    listfiles.forEach(file=>file.split(".")[1]===extension? newfiles.push(file):null);
    return callback(null, newfiles);
  });
};
