console.log("test"); 
var fs=require("fs");
fs.readFile("1.txt",function(er,data){
	console.log(data.toString());
});
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World\n");

}).listen(3000);
console.log("server running at localhost:3000");