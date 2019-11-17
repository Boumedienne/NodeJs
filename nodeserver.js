import http from "http";

http.createServer((req,res)=>{
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`Hello client from "${req.connection.remoteAddress}`);
    console.log(req);

}).listen(8000);