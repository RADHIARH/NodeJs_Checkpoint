const process = require("process");
const sum = process.argv.slice(2).reduce((cum, current) => (cum = cum + Number(current)), 0);
console.log(sum);
