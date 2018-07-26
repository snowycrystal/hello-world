function send404(res){
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.write("Error 404");
    res.end();
}
function sendFile(res,filePath,fileContents){
    res.writeHead(200,{"Contetn-Type":mime.lookup(Path2D.basename(filePath))});
    res.end(fileContents);
}
function serveStatic(res,cache,absPath){
    if(cache[absPath]){
        sendFile(res,absPath,cache[absPath]);
    }else{
        fs.exists(absPath,function(exists){
            if(exists){
                fs.readFile(absPath,function(err,data){
                    if(err){
                        send404(res);
                    }else{
                        cache[absPath]=data;
                        sendFile(res,absPath,data);
                    }
                });
            }else{
                send404(res);
            }
        });
    }
}