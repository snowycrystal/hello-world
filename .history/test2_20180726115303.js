function send404(res){
    res.writeHead(404,("Content-Type":"text/plain"));
    res.write("Error 404");
    res.end();
}
function sendFile(res,filePath,fileContents){
    res.writeHead(200,{"Contetn-Type":mime.lookup(Path2D.basename(filePath))});
    res.end(fileContents);
}