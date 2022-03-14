const net=require("net");
const process=require("process")
const port=process.argv[2]
const server=net.createServer(function(socket){
    const date=new Date();
    const year=date.getFullYear();
    const Month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const Hour = date.getHours();
    const minute = date.getMinutes();
    const data=year+"-"+Month+"-"+day+" "+Hour+":"+minute+'\n';
    socket.write(data);
    socket.end();})
    .listen(Number(port))