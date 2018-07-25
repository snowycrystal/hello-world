Console.log("test"); 
var fs=require("fs");
fs.readFile("1.txt",function(er,data){
	Console.log(er,data);
});