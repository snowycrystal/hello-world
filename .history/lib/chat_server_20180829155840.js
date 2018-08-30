var socketio=require("socket.io");
var io;
var guestNumber={};
var nickNames={};
var namesUsed=[];
var currentRoom={};
exports.listen=function(server){
    io=socketio.listen(server);
    io.set("log level",1);
    io.sockets.on("connection",function(socket){
        guestNumber=assign1(socket,guestNumber,nickNames,namesUsed);
        //handle
        socket.on("rooms",function(){
            socket.emit("rooms",io.sockets.manager.rooms);
        });
    });
};

function assign1(socket,guestNumber,nickNames,namesUsed){
    var name="Guest"+guestNumber;
    nickNames[socket.id]=name;
    socket.emit("nameResult",{
        success:true,
        name:name
    });
    namesUsed.push(name);
    return guestNumber+1;
}