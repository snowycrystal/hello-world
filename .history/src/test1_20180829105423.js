
var fs=require("fs");
var http=require("http");
http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"});
    var stream=fs.createReadStream("./1.txt");//.pipe(res);
    stream.on("data",function(data){
        console.log(data);
    });
    stream.on("end",function(){
        console.log("finished");
    })
    res.end("Hello World\n");

}).listen(3000);
console.log('server running at localhost:3000');
var class1=(function(){
    var class11=function(s){
        this.s=s;
        this.ss=function(xx){
            console.log(xx);
        }
      //  return new class11(s);
    };
    class11.prototype.sss=function(){
        console.log("sss");   
    };
    class11.b=this.b;
return class11;
}());
var class2=function(s){
    this.prototype=new class1(s)
    this.ssss=function(){
        console.log("ssss");
    }
    return this ;
}
var x=new class2(222);
//x.a="xx";
console.log(x);


var prom1=new Promise(function(res,rej){
    res("121");
    rej("err11");
});
prom1.then(function(val){
    console.log(val);
},function(err){
    console.log(err);
});

function* gen(){
    var x1=yield 111;
    yield* [222,x1,202];
    return 333;
}
var g= gen();
/*console.log(g.next());
console.log(g.next(201));
console.log(g.next());*/
for(let i of g){
    console.log(i);
}
async function gen2(x){
    var z = await x*2 +  await x + 2;
    return z;
}
gen2(3).then(result => console.log(result)).catch(error => console.log(error));