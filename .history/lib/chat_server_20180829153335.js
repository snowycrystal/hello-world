var socketio=require("socket.io");
var io;
var guestNumber={};
var nickNames={};
var namesUsed=[];
var currentRoom={};
exports.linsten=function(server){
    io=socketio.listen(server);
    io.serveClient("log level",1);
    io.sockets.on("connection",function(socket){
        //guestNumber
        //handle
        socket.on("rooms",function(){
            socket.emit("rooms",io.sockets.manager.rooms);
        });
    });
};