const http=require("http");
const process=require("process");
const url=require("url");
const getParseTime=(time)=>{
    return {
    hour:time.getHours(),
    minute:time.getMinutes(),
    second:time.getSeconds()
}}
const getunixtime=(time)=>{
    return {
      unixtime:time.getTime()
    };
}
    http.createServer((req,res)=>{
    var urll=url.parse(req.url,true)
     if(urll.pathname==='/api/parsetime')
        {
            res.writeHead(200, { "Content-Type": "application/json" }),
            res.end(JSON.stringify(getParseTime(new Date(urll.query.iso))));
        } 
    else if(urll.pathname==='/api/unixtime')
        {
             res.writeHead(200, {'Content-Type': 'application/json'}),
             res.end(JSON.stringify(getunixtime(new Date(urll.query.iso))));
            }
     }).listen(Number(process.argv[2]))