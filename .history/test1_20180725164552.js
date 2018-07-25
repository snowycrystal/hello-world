console.log("test"); 
var fs=require("fs");
fs.readFile("1.txt",function(er,data){
    console.log(er,data);
})